import './Register.css'
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import { emailErrorMessage } from '../../utils/constants'

function Register({ handleRegister }) {
	const [values, setValues] = useState()
  const [errors, setErrors] = useState()
  const [isValid , setIsValid] = useState(false)

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
		handleRegister(values);
	}

	return (
		<section className="register">
			<Link to="/" className="register__logo"></Link>
			<h2 className="register__title">Добро пожаловать!</h2>
			<form className="register__form" onSubmit={handleSubmit}>
				<div className="register__field">
					<label className="register__label">Имя</label>
					<input type="text"
							value={values?.name || ''}
							onChange={handleChange}
							id="name-input"
							className="register__input"
							name="name"
							placeholder="Имя"
							minLength="2" maxLength="30"
							autoComplete="off"
							required />
					 {errors?.name && <span className="register__input-error">{errors.name}</span>}
				</div>
				<div className="register__field">
					<label className="register__label">E-mail</label>
					<input type="email"  
							value={values?.email || ''}
							onChange={handleChange}
							id="email-input"
							className="register__input"
							name="email"
							placeholder="Email"
							autoComplete="off"
							required />
					{errors?.email && <span className="register__input-error">{errors.email}</span>}
				</div>
				<div className="register__field">
					<label className="register__label">Пароль</label>
					<input type="password"
							value={values?.password || ''}
							onChange={handleChange}
							id="password-input" 
							className="register__input" 
							name="password"
							placeholder="Пароль"
							minLength="6" maxLength="40"
							autoComplete="off"
							required />
					{errors?.password && <span className="register__input-error">{errors.password}</span>}
				</div>
				<span className="register__input-error"></span>
				<button	type="submit" className={isValid ? "register__button" : "register__button register__button_disabled"}>Зарегистрироваться</button>
				<p className="register__login-sign">Уже зарегистрированы?&nbsp;
					<Link to="/signin" className="register__signin">Войти</Link>
				</p>
			</form>
		</section>
	);
};

  
export default Register;