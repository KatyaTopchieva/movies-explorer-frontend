import './App.css'
import React, { useEffect } from 'react'
import { Route, Switch, useHistory, Redirect, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import mainApi from '../../utils/MainApi.js'
import moviesApi from '../../utils/MoviesApi.js'
import Main from "../Main/Main"
import Movies from '../Movies/Movies'

import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'
import { successMessage } from '../../utils/constants'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');


  const [movies, setMovies] = useState([])
  //const [allMovies, setAllMovies] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [moreCards, setMoreCards] = useState(0)
  const [savedMovies, setSavedMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false)
  const location = useLocation()

  function getUserInfo() {
    mainApi.getUserInfo(handleLogOut)
    .then((data) => {
      setLoggedIn(true)
      //history.push(path)
      setCurrentUser(data)
      getSavedMovies()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  function handleRegister(data) {
    mainApi.register(data.name, data.email, data.password)
      .then(() => {
        handleLogin(data);
      })
      .catch(err => {
        setErrorMessage(err.message)
        console.log(err.message)
      });
  }

  function handleLogin(data) {
    mainApi.login(data.email, data.password)
      .then(() => {
        mainApi.headersRefresh();
        setLoggedIn(true);
        getUserInfo();
        history.push('/movies');
      })
      .catch(err => {
        setErrorMessage(err.message)
        setLoggedIn(false)
        console.log(err.message)
      })
  }

  function patchUserInfo(data) {
    mainApi.patchUserInfo(data.name, data.email, handleLogOut)
    .then(() => {
      setCurrentUser(data);
      setMessage(successMessage);
      setIsSuccess(true);
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  function handleLogOut() {
      setLoggedIn(false);
      history.push('/');
      localStorage.clear();
  }

function filterMovies(movies, movieName, isShortFilms){
  const searchedMovies = movies.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
  const foundMovies = isShortFilms ? searchedMovies.filter((item) => item.duration <= 40) : searchedMovies
  localStorage.setItem('foundMovies', JSON.stringify(foundMovies))
  localStorage.setItem('searchMovieName', movieName)
  localStorage.setItem('shortFilms', isShortFilms)
  setLoading(false)
  handleResize()
}
//--Movies
function searchMovie(movieName, isShortFilms) {
  setLoading(true)
  const allMovies = JSON.parse((localStorage.getItem('allMovies')))
  if(!allMovies || allMovies.length===0){
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies))
        filterMovies(movies, movieName, isShortFilms)
      })
      .catch((err) => {
        console.log(err.message)
        setLoading(false)
        setServerError(true)
      })   
  }else{
    filterMovies(allMovies, movieName, isShortFilms)
  }

}

function checkWindowWidth() {
  setWindowWidth(window.innerWidth)
}

function handleResize() {
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
  if (foundMovies === null) {
    return
  }
  if (windowWidth >= 1280) {
    setMovies(foundMovies.slice(0, 12))
    setMoreCards(4)
  } else if (windowWidth > 480 && windowWidth < 1280) {
    setMovies(foundMovies.slice(0, 8))
    setMoreCards(2)
  } else if (windowWidth <= 480) {
    setMovies(foundMovies.slice(0, 5))
    setMoreCards(1)
  }
}

function tokenCheck() {
  const jwt = localStorage.getItem("token");
  const path = location.pathname
  if (jwt) {
    mainApi.checkToken(jwt)
      .then((user) => {
        setLoggedIn(true)
        history.push(path)
        setCurrentUser(user)
        getSavedMovies()
      })
      .catch(() => {
        handleLogOut()
      })
  } else handleLogOut()
}

useEffect(() => {

  tokenCheck();

  window.addEventListener('resize', checkWindowWidth)
  handleResize()
}, [windowWidth])

function handleShowMore() {
  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))
  setMovies(foundMovies.slice(0, movies.length + moreCards))
}

function handleSearch(movieName, isShortFilms) {
  searchMovie(movieName, isShortFilms)
}

function getSavedMovies() {
  mainApi.getMovies(handleLogOut)
    .then((savedMovies) => {
      setSavedMovies(savedMovies.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

function handleCardSave(movie) {
  mainApi.addMovies(movie, handleLogOut)
    .then((movieData) => {
      setSavedMovies([...savedMovies, movieData.data])
    })
    .catch((err) => {
      console.log(err.message)
    })
}

function handleCardDelete(card) {
  const deleteCard = savedMovies.find(c => c.movieId === (card.id || card.movieId) && c.owner === currentUser._id)
  if (!deleteCard) return
  mainApi.deleteMovies(deleteCard._id, handleLogOut)
    .then(() => {
      setSavedMovies(savedMovies.filter(c => c._id !== deleteCard._id))
    })
    .catch((err) => {
      console.log(err.message)
    })
}

function isSaved(card) {
  return savedMovies.some(item => item.movieId === card.id && item.owner === currentUser._id)
}
//--

  return ( 
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path="/">
            <Main 
            loggedIn={loggedIn}
            />
          </Route>
          <Route path="/signup">
            {
              !loggedIn
              ? <Register handleRegister={handleRegister} errorMessage={errorMessage} />
              : <Redirect to='/' />
           }
          </Route>
          <Route path="/signin">
            {
              !loggedIn
              ?  
              <Login handleLogin={handleLogin} errorMessage={errorMessage} />
              : <Redirect to='/' />
            }
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies} 
            loggedIn={loggedIn}
            handleSearch={handleSearch}
            defaultSearchValue={localStorage.getItem('searchMovieName') || ""}
            cards={movies}
            handleShowMore={handleShowMore}
            isSaved={isSaved}
            onCardSave={handleCardSave}
            onCardDelete={handleCardDelete}
            serverError={serverError}
            loading={loading}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loading={loading}
            isSaved={isSaved}            
            loggedIn={loggedIn}
            cards={savedMovies}
            onCardDelete={handleCardDelete}
            serverError={serverError}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            patchUserInfo={patchUserInfo}
            isSuccess={isSuccess}
            logout={handleLogOut}
          />
          <Route path="*">
              <PageNotFound />
          </Route>
        </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
};

export default App;