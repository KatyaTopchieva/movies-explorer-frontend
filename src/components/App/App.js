import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import AboutProject from '../AboutProject/AboutProject';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {

  return ( 
      <Switch>
        <Route exact path="/">
          <AboutProject />
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
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
      </Switch>
  );
};

export default App;