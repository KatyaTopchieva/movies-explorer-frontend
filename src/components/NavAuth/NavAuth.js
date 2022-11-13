import './NavAuth.css'
import React from 'react'
import { Link } from 'react-router-dom'

function NavAuth() {
  return (
    <nav className='navauth'>
      <Link to="/signup" className="navauth__link navauth__link_signup">Регистрация</Link>
      <Link to="/signin" className="navauth__link navauth__link_signin">Войти</Link>
    </nav>
  )
}

export default NavAuth