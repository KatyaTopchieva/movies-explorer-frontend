import './Header.css'
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header({isLoading, isLogged}) {
  return (
    <header className='header'>
      <Logo />
      {isLoading ? '' : isLogged ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header