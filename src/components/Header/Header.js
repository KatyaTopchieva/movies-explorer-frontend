import './Header.css'
import { Route } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'

function Header() {
	const endpoints = [
		"/",
		"/profile",
		"/movies",
		"/saved-movies",
	]
		
  return (
    <Route exact path={endpoints}>
      <header className='header'>
        <Logo />
        {/* <Navigation /> */}
      </header>
    </Route>
  )
}

export default Header
