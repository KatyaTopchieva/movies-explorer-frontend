import React from "react"
import './MoviesCard.css'
import movieImage from '../../images/movie_image.jpg'

function MoviesCard() {
  return (
    <li className="moviescard">
      <p className="moviescard__title">Форест Гамп</p>
      <div className="moviescard__button">
        <button className="moviescard__button_like" type="button"></button>
        <button className="moviescard__button_delete" type="button"></button>
      </div>
      <p className="moviescard__duration">1ч 32м</p>
      <a className="moviescard__link" href="https://www.youtube.com/watch?v=cy2LM6tscwo"   target="_blank" rel="noreferrer">
        <img className="moviescard__image" src={movieImage} alt="Кадр из фильма"/>
      </a>
    </li>
  )
}

export default MoviesCard