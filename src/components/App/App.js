import './App.css'
import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import mainApi from '../../utils/MainApi.js'
// import * as moviesApi from '../../utils/MoviesApi.js'
import Main from "../Main/Main"
import Movies from '../Movies/Movies'

import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'

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

  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        handleLogin(email, password)
      })
      .catch(err => {
        setErrorMessage('Что-то пошло не так...')
        console.log(err.message)
      });
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
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
            <Login />
          </Route>
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