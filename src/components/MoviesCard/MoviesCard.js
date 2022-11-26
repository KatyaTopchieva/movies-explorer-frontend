import React from "react"
import './MoviesCard.css'

function MoviesCard(props) {

  const nameRu = props.card.nameRU
  const picture = props.isOnlySaved ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`
  const trailerLink = props.card.trailerLink

  const duration = () => {
    if (props.card.duration > 60) {
      return (props.card.duration / 60 | 0) + "ч " + props.card.duration % 60 + "м"
    }
    if (props.card.duration === 60) {
      return (props.card.duration / 60) + "ч"
    } else {
      return props.card.duration + "м"
    }
  }

  function handleCardSave() {
    if(!props.isSaved(props.card))
      props.onCardSave(props.card)
      else props.onCardDelete(props.card)
  }

  function handleCardDelete() {
    props.onCardDelete(props.card)
  }

  return (
    <li className="moviescard">
      <div className="moviescard__info">
        <p className="moviescard__title">{nameRu}</p>
        <p className="moviescard__duration">{duration()}</p>
        <div className="moviescard__button">
          {props.isOnlySaved ? (
          <button className='moviescard__button-delete' onClick={handleCardDelete} type="button"></button>
          ) : (
          <button className={`moviescard__button-save 
             ${props.isSaved(props.card)  ? `moviescard__button-save_active` : `moviescard__button-save_inactive`} `} 
             onClick={handleCardSave} type="button"></button>
          )}
        </div>
      </div>
      <a className="moviescard__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="moviescard__image" src={picture} alt="Кадр из фильма"/>
      </a>
    </li>
  )
}

export default MoviesCard