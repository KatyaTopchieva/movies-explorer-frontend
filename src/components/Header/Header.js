import './Header.css'
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header() {
  const path = '/movies';
  const isLogged = true;

  return (
    <header className={`header ${(path === "/movies" && 'header_white') || (path === "/saved-movies" && 'header_white') || (path === "/profile" && 'header_white')}`}>
      <Logo />
      {isLogged ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header
