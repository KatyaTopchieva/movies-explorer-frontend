import './NavAuth.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavAuth() {
  return (
    <nav className='navauth'>
      <NavLink to="/signup" className="navauth__link navauth__link_signup">Регистрация</NavLink>
      <NavLink to="/signin" className="navauth__link navauth__link_signin">Войти</NavLink>
    </nav>
  )
}

export default NavAuth