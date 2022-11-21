import React from 'react'
import './SearchForm.css'
import { useState, useEffect } from 'react'

function SearchForm(props) {

  const [movieName, setMovieName] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  function handleChangeMovieName(e) {
    setMovieName(e.target.value)
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked
    setCheckbox(isShortFilms)
    props.handleSearch(movieName, isShortFilms)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.handleSearch(movieName, checkbox)
  }
  
  useEffect(() => {
    setMovieName(props.defaultValue)
    setCheckbox(JSON.parse(localStorage.getItem('shortFilms')) || false)
  }, [])

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__wrapper'>
        <input className='searchform__input' onChange={handleChangeMovieName} placeholder="Фильм" type="text" required/>
        <button className='searchform__button' onSubmit={handleSubmit} type='submit'></button>
      </div>
      <label className='searchform__tumbler'>
        <input className='searchform__checkbox' onChange={handleChangeCheckbox}  name='checkbox' id='checkbox' type="checkbox"/>
        <span className='searchform__slider'></span>
        <span className='searchform__slider-text'>Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm