import React from "react"
import { useState, useEffect } from 'react'
import './SavedMovies.css'
import Header from "../Header/Header"
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function SavedMovies(props) {
  const [filteredMovies, setFilteredMovies] = useState([])

  function handleSearch(movieName, isShortFilms) {
    const filteredMovies = props.cards.filter((item) => item.nameRU.toLowerCase().includes(movieName.toLowerCase()))
    if (isShortFilms) {
      setFilteredMovies(filteredMovies.filter((item) => item.duration <= 40))
    }
    else {
      setFilteredMovies(filteredMovies)
    }
  }

  function initFilteredMovies() {
    setFilteredMovies(props.cards)
  }

  useEffect(() => {
    setFilteredMovies(
      filteredMovies.filter(movie => props.cards.some(card => movie.movieId === card.movieId))
    )
  }, [props.cards])

  useEffect(() => {
    initFilteredMovies()
  }, [])

  return (
    <section className="saved-movies">
      <Header
        loggedIn={props.loggedIn}
        path={"/saved-movies"}
      />
      <SearchForm
       handleSearch={handleSearch}
       defaultValue=""
       />
      <MoviesCardList
        loading={props.loading}
        cards={filteredMovies}
        isSaved={props.isSaved}
        onCardDelete={props.onCardDelete}
        serverError={props.serverError}
        isOnlySaved={true}
      />
      <Footer />
    </section>
  )
}

export default SavedMovies