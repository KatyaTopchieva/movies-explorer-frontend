import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Navigation.css'

function Navigation() {
  const [showItems, setShowItems] = useState(false);
  const handleToggleMenu = () => setShowItems(!showItems);

	return (
		<section className='navigation'>
		<button className='navigation__button-burger' onClick={handleToggleMenu}></button>
			<nav className={`${showItems ? 'navigation__menu_opened' : 'navigation__menu'}`}>
				<div className='navigation__container'>
					<button className='navigation__close' type='button' onClick={handleToggleMenu}></button>
					<div className='navigation__logo'>
						<Logo />
					</div>
					<div className='navigation__wrapper'>
						<Link to='/' className='navigation__link navigation__link_main' onClick={handleToggleMenu}>Главная</Link>
						<NavLink to='/movies' className='navigation__link navigation__link_movies' onClick={handleToggleMenu}>Фильмы</NavLink>
						<NavLink to='/saved-movies' className='navigation__link navigation__link_saved-movies' onClick={handleToggleMenu}>Сохраненные фильмы</NavLink>
					</div>
					<Link to='/profile' className='navigation__profile-link' onClick={handleToggleMenu}>
						<button className='navigation__profile-link-button' type='button'></button>
					</Link>
				</div>
			</nav>
		</section>
	)
}

export default Navigation