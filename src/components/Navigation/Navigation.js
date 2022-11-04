import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react';

function Navigation(props) {
	const [isClicked, setIsClicked] = useState(false);

	function handleMenuOpen() {
		setIsClicked(true)
	};
	
	function handleMenuClose() {
		setIsClicked(false)
	};

	return (
		<>
			{!props.logedIn ? (
				<nav className="navigation">
          <Link to="/signup" className="navigation__link navigation__link_unlogged">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_unlogged">Войти</Link>
        </nav>
			) : (
				<>
				<div className={`${isClicked ? "overlay" : ""}`}>
					<nav className={`navigation navigation__popup ${isClicked ? "navigation__popup_open" : ""}`}>
						<button className="navigation__popup-button navigation__popup-button_close" onClick={handleMenuClose}></button>
						<Link to="/" className="navigation__link navigation__link_loggedin" onClick={handleMenuClose}>Главная</Link>
						<NavLink to="/movies" className="navigation__link navigation__link_loggedin" activeClassName="navigation__link_active" onClick={handleMenuClose}>Фильмы</NavLink>
						<NavLink to="/saved-movies" className="navigation__link navigation__link_loggedin" activeClassName="navigation__link_active" onClick={handleMenuClose}>Сохранённые фильмы</NavLink>
						<Link to="/profile" className="navigation__account-button" onClick={handleMenuClose}>
							<div className="navigation__account"></div>
							Аккаунт
						</Link>
					</nav>
				</div>
				<button className="navigation__popup-button navigation__popup-button_burger" onClick={handleMenuOpen}></button>
			</>
			)}
		</>
	)
}

export default Navigation