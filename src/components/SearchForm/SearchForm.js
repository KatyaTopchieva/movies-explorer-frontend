import React from 'react'
import './SearchForm.css'
import { useState, useEffect } from 'react'
import { searchErrorMessage } from '../../utils/constants'

function SearchForm(props) {

  const [error, setError] = useState(false);
  const [placeholderContent, setPlaceholderContent] = useState('Фильм');
  const [movieName, setMovieName] = useState('')
  const [checkbox, setCheckbox] = useState(false)

  function handleChangeMovieName(e) {
    setMovieName(e.target.value)
    setError(false);
  }

  function handleChangeCheckbox(e) {
    const isShortFilms = e.target.checked
    setCheckbox(isShortFilms)
    props.handleSearch(movieName, isShortFilms)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!movieName) {
        setError(true);        
        e.target.elements['searchmovie'].focus();
        return;
    }
    setError(false);
    setPlaceholderContent('Фильм');
    props.handleSearch(movieName, checkbox)
  }
  
  useEffect(() => {
    setMovieName(props.defaultValue)
    setCheckbox(JSON.parse(localStorage.getItem('shortFilms')) || false)
  }, [])

  return (
    <form className='searchform' onSubmit={handleSubmit} noValidate>
      <div className='searchform__wrapper'>
        <input className='searchform__input'
          name="searchmovie" 
          placeholder={placeholderContent}  
          value={movieName} 
          onChange={handleChangeMovieName} 
          type="text" 
          required/>        
        <button className='searchform__button' onSubmit={handleSubmit} type='submit'></button>
        {error && <div><span className="searchform__input-error">{searchErrorMessage}</span></div>}
      </div>
      <label className='searchform__tumbler'>
        <input className='searchform__checkbox' 
          onChange={handleChangeCheckbox} 
          checked={checkbox}
          name='shortFilms' 
          id='shortFilms' 
          type="checkbox"/>
        <span className='searchform__slider'></span>
        <span className='searchform__slider-text'>Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm