import React from "react"
import { useState, useContext, useEffect } from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import "./Profile.css"
import Header from '../Header/Header'
import { NavLink } from "react-router-dom"
import isEmail from 'validator/lib/isEmail'
import {
  emailErrorMessage
} from '../../utils/constants'

function Profile(props) {
  const currentUser = useContext(CurrentUserContext)

  const [values, setValues] = useState()
  const [errors, setErrors] = useState()
  const [isValid , setIsValid] = useState(false)
  const [usname, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)

	const handleChange = (evt) => {
		    const target = evt.target
				const name = target.name;
				const value = target.value;

				if (name === 'email') {
					if (!isEmail(value)) {
						target.setCustomValidity(emailErrorMessage)
					} else {
						target.setCustomValidity('');
					}
				}    

				setValues({ ...values, [name]: value });
				setErrors({ ...errors, [name]: target.validationMessage })
				setIsValid(target.closest('form').checkValidity()) 
	};

	const handleSubmit = (evt) => {
    evt.preventDefault();
		props.patchUserInfo(values);
    setName(values.name);
    setEmail(values.email)
	}

  useEffect(() => {
    setValues(currentUser)
  }, [currentUser])

  return (
    <section className="profile">
      <Header 
        loggedIn={props.loggedIn}
        path={"/profile"}
      />
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate> 
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input type="text"
              value={values?.name || ''}
              onChange={handleChange}
              className="profile__input"
              name="name"
              autoComplete="off"
              minLength="2" maxLength="30"
              required />
            {errors?.name && <div><span className="profile__input-error">{errors.name}</span></div> }
          </div>
          <div className="profile__field profile__field_second">
            <label className="profile__label">E-mail</label>
            <input type="email"
              onChange={handleChange}
              value={values?.email || ''}
              className="profile__input profile__input_second"
              autoComplete="off"
              name="email"
              required />
           {errors?.email && <div><span className="profile__input-error">{errors.email}</span></div>}
          </div>
          <button disabled={!(isValid && (usname !== values?.name || email !== values?.email))} 
          className={(isValid && (usname !== values?.name || email !== values?.email))? "profile__button profile__button_redact" : "profile__button profile__button_disabled"} type="submit">Редактировать</button>
          <NavLink className="profile__link-logout" to={'/'}>
            <button className="profile__button profile__button_logout" onClick={props.logout} type="button">Выйти из аккаунта</button>
          </NavLink>
        </form>
      </div>
    </section>
  )
}

export default Profile