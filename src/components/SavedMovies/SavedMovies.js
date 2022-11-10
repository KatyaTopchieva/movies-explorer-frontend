import React from "react"
import './SavedMovies.css'
import Header from "../Header/Header"
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
    </section>
  )
}

export default SavedMovies