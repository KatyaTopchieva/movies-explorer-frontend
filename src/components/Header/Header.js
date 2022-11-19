import './Header.css'
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn}) {
  return (
    <header className='header'>
      <Logo />
      {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header