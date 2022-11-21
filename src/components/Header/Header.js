import './Header.css'
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header({loggedIn, path}) {
 


  return (
    <header className={(path === '/') ? 'header' : 'header_white'}>
      <Logo />
      {loggedIn ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header