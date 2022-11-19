import React from "react"
import "./Profile.css"
import Header from '../Header/Header'
import { NavLink } from "react-router-dom"

function Profile() {
  return (
    <section className="profile">
      <Header 
        loggedIn={true}
      />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__field">
            <lable className="profile__label">Имя</lable>
            <input className="profile__input" type="text" name="name" autocomplete="off" minLength="2" maxLength="30" required />
            <span className="profile__input-error"></span>
          </div>
          <div className="profile__field profile__field_second">
            <lable className="profile__label">E-mail</lable>
            <input className="profile__input profile__input_second" type="email" autocomplete="off" name="email" required />
            <span className="profile__input-error"></span>
          </div>
          <span className="profile__input-error"></span>
          <button className="profile__button profile__button_redact" type="button">Редактировать</button>
          <NavLink className="profile__link-logout" to={'/'}>
           <button className="profile__button profile__button_logout" type="button">Выйти из аккаунта</button>
          </NavLink>
        </form>
      </div>
    </section>
  )
}

export default Profile