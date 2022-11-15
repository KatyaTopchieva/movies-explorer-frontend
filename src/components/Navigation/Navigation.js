import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navigation.css'

function Navigation() {

	return (
		<section className='navigation'>
		<button className='navigation__button-burger'></button>
			{/* <nav className='navigation__menu navigation__menu_opened'> */}
			<nav className='navigation__menu'>
				<div className='navigation__container'>
					<button className='navigation__close' type='button'></button>
					<div className='navigation__logo'>
						<Logo />
					</div>
					<div className='navigation__wrapper'>
						<NavLink to='/' className='navigation__link navigation__link_main'>Главная</NavLink>
						<NavLink to='/movies' className='navigation__link navigation__link_movies'>Фильмы</NavLink>
						<NavLink to='/saved-movies' className='navigation__link navigation__link_saved-movies'>Сохраненные фильмы</NavLink>
					</div>
					<NavLink to='/profile' className='navigation__profile-link'>
						<button className='navigation__profile-link-button' type='button'></button>
					</NavLink>
				</div>
			</nav>
		</section>
	)
}

export default Navigation