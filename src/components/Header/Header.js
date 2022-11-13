import './Header.css'
import Logo from '../Logo/Logo'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';

function Header() {
	const isLogin = false;
  const path = '/';

  return (
    <header className={`${(!isLogin ? 'header'  : 'header_white')}`}>
      <Logo />
      {path === '/' ? <Navigation /> : <NavAuth />}
    </header>
  )
}

export default Header
