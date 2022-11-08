import React from "react"
import './Footer.css'

function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__container">
          <ul className="footer__list">
            <li className="footer__list-item">
              <a className="footer__link" href="https://practicum.yandex.ru/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-item">
              <a className="footer__link" href="https://github.com/KatyaTopchieva" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
          <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        </div>
    </section>
  )
}
export default Footer