import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation({ isOpen }) {
	// const navigationClassName = `navigation ${isOpen && 'navigation_opened'}`
	
	return (
		// <nav className={navigationClassName}>
		// <nav className='navigation navigation_opened'>
		<nav className='navigation'>
			<div className='navigation__container'>
				<button className='navigation__close' type='button'></button>
				<div className='navigation__wrapper'>
					<Link to='/' className='navigation__link navigation__link_main'>Главная</Link>
					<Link to='/movies' className='navigation__link navigation__link_movies'>Фильмы</Link>
					<Link to='/saved-movies' className='navigation__link navigation__link_saved-movies'>Сохраненные фильмы</Link>
				</div>
				<Link to='/profile' className='navigation__profile-link'>Аккаунт</Link>
			</div>
			{/* {loggedIn ? (
				<nav className="">
          <Link to="/signup" className="navigation__link navigation__link_signup">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_signin">Войти</Link>
        </nav>
			) : (
				

			)} */}
		</nav>
	)
}

export default Navigation