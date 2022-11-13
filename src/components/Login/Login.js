import './Login.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Login(){

  return (
    <section className="login">
			<NavLink to="/" className="login__logo"></NavLink>
			<h2 className="login__title">Рады видеть!</h2>
			<form className="login__form">
				<div className="login__field">
					<label className="login__label">E-mail</label>
					<input className="login__input" type="email" name="email" placeholder="E-mail" required />
					<span className="login__input-error"></span>
				</div>
				<div className="login__field">
					<label className="login__label">Пароль</label>
					<input className="login__input" type="password" name="password" placeholder="Пароль" required minLength="6" />
					<span className="login__input-error"></span>
				</div>
				<span className="login__input-error"></span>
				<button className="login__button" type="submit">Войти</button>
				<p className="login__login-sign">Еще не зарегистрированы?&nbsp;
					<NavLink to="/signup" className="login__signup">Регистрация</NavLink>
				</p>
			</form>
  	</section>
  );
};
  
export default Login