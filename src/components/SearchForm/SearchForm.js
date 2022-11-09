import React from 'react'
import './SearchForm.css'

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__wrapper'>
        <input className='searchform__input' placeholder="Фильм" type="text" required/>
        <button className='searchform__button' type='submit'></button>
      </div>
      <label className='searchform__tumbler'>
        <input className='searchform__checkbox' name='checkbox' id='checkbox' type="checkbox"/>
        <span className='searchform__slider'></span>
        <span className='searchform__slider-text'>Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm