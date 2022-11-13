import './Header.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header() {
	const isLogin = true;
  const path = '/';

  return (
    <header className={`header ${(path === '/profile' && 'header_white')}`}>
      <Logo />
      {path === '/' ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header
