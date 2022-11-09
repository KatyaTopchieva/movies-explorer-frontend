import React from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'


function Movies() {
  return (
    <section className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
    </section>
  )
}

export default Movies