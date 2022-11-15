import { Link } from 'react-router-dom'
import logoGreen from '../../images/logoGreen.svg'
import logoBlack from '../../images/logoBlack.svg'
import './Logo.css'

function Logo() {
  return (
    <Link to="/">
      <img className="logo logoGreen" src={logoGreen} alt="Логотип приложения" />
      <img className="logo logoBlack" src={logoBlack} alt="Логотип приложения" />
    </Link>
  )
}

export default Logo