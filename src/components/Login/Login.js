import './Login.css'
import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import { emailErrorMessage } from '../../utils/constants'

function Login(handleLogin){
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
		handleLogin(values);
	}


  return (
    <section className="login">
			<Link to="/" className="login__logo"></Link>
			<h2 className="login__title">Рады видеть!</h2>
			<form className="login__form" onSubmit={handleSubmit}>
				<div className="login__field">
					<label className="login__label">E-mail</label>
					<input type="email"  
							value={values?.email || ''}
							onChange={handleChange}
							id="email-input"
							className="login__input"
							name="email"
							placeholder="Email"
							required />
					{errors?.email && <span className="login__input-error">{errors.email}</span>}
				</div>
				<div className="login__field">
					<label className="login__label">Пароль</label>
					<input type="password"
							value={values?.password || ''}
							onChange={handleChange}
							id="password-input" 
							className="login__input" 
							name="password"
							placeholder="Пароль"
							minLength="6" maxLength="40" 
							required />
					{errors?.password && <span className="login__input-error">{errors.password}</span>}
				</div>
				<span className="login__input-error"></span>
				<button className={isValid ? "login__button" : "login__button_disabled"} type="submit">Войти</button>
				<p className="login__login-sign">Еще не зарегистрированы?&nbsp;
					<Link to="/signup" className="login__signup">Регистрация</Link>
				</p>
			</form>
  	</section>
  );
};
  
export default Login