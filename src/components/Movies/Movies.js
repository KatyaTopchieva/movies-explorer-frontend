import React from 'react'
import { useState } from 'react'
import './Movies.css'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'

function Movies(props) {

  return (
    <section className='movies'>
      <Header loggedIn={props.loggedIn} />
      <SearchForm        
        handleSearch={props.handleSearch}
        defaultValue={props.defaultSearchValue}
        />
        {props.loading ? <Preloader /> : ''}
      <MoviesCardList 
        cards={props.cards}
        isSaved={props.isSaved}
        isOnlySaved={false}
        onCardSave={props.onCardSave}
        onCardDelete={props.onCardDelete}
        serverError={props.serverError}
        handleShowMore={props.handleShowMore}
        />
      <Footer />
    </section>
  )
}

export default Movies