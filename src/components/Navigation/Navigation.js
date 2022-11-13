import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navigation.css'

function Navigation() {
	// const navigationClassName = `navigation ${isOpen && 'navigation_opened'}`

	return (
		<section className='navigation'>
		<button className='navigation__button-burger'></button>
			{/* <nav className={navigationClassName}> */}
			<nav className='navigation__menu navigation__menu_opened'>
			{/* <nav className='navigation__menu'> */}
				<div className='navigation__container'>
					<button className='navigation__close' type='button'></button>
					<div className='navigation__logo'>
						<Logo />
					</div>
					<div className='navigation__wrapper'>
						<Link to='/' className='navigation__link navigation__link_main'>Главная</Link>
						<Link to='/movies' className='navigation__link navigation__link_movies'>Фильмы</Link>
						<Link to='/saved-movies' className='navigation__link navigation__link_saved-movies'>Сохраненные фильмы</Link>
					</div>
					<button className='navigation__profile-link-button' type='button'>
						<Link to='/profile' className='navigation__profile-link'></Link>
					</button>
				</div>
			</nav>
		</section>
	)
}

export default Navigation