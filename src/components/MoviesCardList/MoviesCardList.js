import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList() {
  return (
    <ul className="moviescardlist">
      <MoviesCard />
      <div className="moviescardlist__text">Ничего не найдено</div>
      <button className="moviescardlist__button" type="button">Еще</button>
    </ul>
  )
}

export default MoviesCardList