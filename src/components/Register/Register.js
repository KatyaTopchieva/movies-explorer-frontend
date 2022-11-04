import './Register.css'
import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../Logo/Logo'

function Register(){

  return (
    <section className="register">
			<div className="register__logo"></div>
			<h2 className="register__title">Добро пожаловать!</h2>
			<form className="register__form">
				<div className="register__field">
					<label className="register__label">Имя</label>
					<input className="register__input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="30" required />
					<span className="register__input-error"></span>
				</div>
				<div className="register__field">
					<label className="register__label">E-mail</label>
					<input className="register__input" type="email" name="email" placeholder="E-mail" required />
					<span className="register__input-error"></span>
				</div>
				<div className="register__field">
					<label className="register__label">Пароль</label>
					<input className="register__input" type="password" name="password" placeholder="Пароль" required minLength="6" />
					<span className="register__input-error"></span>
				</div>
				<span className="registration__input-error"></span>
				<button className="register__button" type="submit">Зарегистрироваться</button>
				<p className="register__login-sign">Уже зарегистрированы?&nbsp;
					<Link to="/signin" className="register__signin">Войти</Link>
				</p>
			</form>
  	</section>
  );
};
  
export default Register;