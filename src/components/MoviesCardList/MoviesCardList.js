import React from "react"
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard"


function MoviesCardList(props) {

  if (props.cards.length === 0) return <span className="moviescardlist__error">Ничего не найдено</span>
  if (props.serverError) return <span className="moviescardlist__error">Ошибка запроса. Попробуйте ещё раз</span>

  const foundMovies = JSON.parse(localStorage.getItem('foundMovies'))

  return (
    <>
    <div className="moviescardlist">
      <ul className="moviescardlist__list">
      {
          props.cards.map(card => {
            return (
              <MoviesCard
                card={card}
                key={props.isOnlySaved ? card.movieId : card.id}
                isSaved={props.isSaved}
                onCardSave={props.onCardSave}
                isOnlySaved={props.isOnlySaved}
                onCardDelete={props.onCardDelete}
              />
            )
          })
        }
      </ul>
      {props.isOnlySaved ? '' : (props.cards.length < foundMovies.length ?
      <div className="moviescardlist__answer-box">
        <button className="moviescardlist__button" onClick={props.handleShowMore} type="button">Еще</button>
      </div> : '')}
    </div>
    </>
  )
}

export default MoviesCardList