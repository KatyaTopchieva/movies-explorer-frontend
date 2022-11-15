import React from "react"
import './PageNotFound.css'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <section className="pagenotfaund">
      <p className="pagenotfaund__code">404</p>
      <p className="pagenotfaund__text">Страница не найдена</p>
      <Link to="/" className="pagenotfaund__link">Назад</Link>
    </section>
  )
}

export default PageNotFound