import './App.css'
import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import mainApi from '../../utils/MainApi.js'
// import * as moviesApi from '../../utils/MoviesApi.js'
import Main from "../Main/Main"
import Movies from '../Movies/Movies'

import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'
// import { сonnectionErrorMessage } from '../../utils/constants'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  function getUserInfo() {
    mainApi.getUserInfo()
    .then((data) => {
      setLoggedIn(true);
      setCurrentUser(data);
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  function handleRegister(data) {
    mainApi.register(data.name, data.email, data.password)
      .then(() => {
        handleLogin(data.email, data.password)
      })
      .catch(err => {
        setErrorMessage('Что-то пошло не так...')
        console.log(err.message)
      });
  }

  function handleLogin(data) {
    mainApi.login(data.email, data.password)
      .then(() => {
        setLoggedIn(true)
        getUserInfo()
        history.push('/movies')
      })
      .catch(err => {
        setErrorMessage('Что-то пошло не так...')
        setLoggedIn(false)
        console.log(err.message)
      })
  }

  // function handleTokenCheck() {
  //   if (localStorage.getItem('token')){
  //   const jwt = localStorage.getItem('token');
   
  //   return mainApi.checkToken(jwt)
  //     .then((user) => {
  //       setCurrentUser(user);
  //       localStorage.setItem('loggedIn', true);
  //     })
  //     .then((data) => data)
  //     .catch(() => {
  //       localStorage.setItem('loggedIn', false);
  //     }); 
  //   } else localStorage.setItem('loggedIn', false);
  // }

  // useEffect(() => {
  //   if (loggedIn) {
  //     mainApi.getUserInfo()
  //       .then((user) => {
  //         if (user) {
  //           localStorage.setItem('userId', user._id);
  //           setCurrentUser(user);
  //         };
  //       })
  //       .catch(() => {setErrorMessage(сonnectionErrorMessage)})
  //   }
  // }, []);

  // useEffect(() => {
  //   handleTokenCheck();
  // }, []);

  return ( 
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister} errorMessage={errorMessage} />
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin} errorMessage={errorMessage} />
          </Route>
          {/* <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            componenet={Movies}
            /> */}
         <Route path="/movies">
          <Movies />
        </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
              <PageNotFound />
            </Route>
        </Switch>
    </div>
    </CurrentUserContext.Provider>
  );
};

export default App;