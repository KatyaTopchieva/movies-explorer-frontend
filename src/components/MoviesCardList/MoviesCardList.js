import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList() {
  return (
    <div className="moviescardlist">
      <ul className="moviescardlist__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className="moviescardlist__text">Ничего не найдено</div>
      <button className="moviescardlist__button" type="button">Еще</button>
    </div>
  )
}

export default MoviesCardList