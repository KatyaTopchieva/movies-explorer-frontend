import React from "react"
import './Portfolio.css'
import arrow from '../../images/arrow.svg'

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://katyatopchieva.github.io/russian-travel/">
            <h4 className="portfolio__item-title">Статичный сайт</h4>
            <img className="portfolio__link-arrow" src={arrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://katyatopchieva.github.io/mesto/">
            <h4 className="portfolio__item-title">Адаптивный сайт</h4>
            <img className="portfolio__link-arrow" src={arrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://etopchieva.students.nomoredomains.sbs/">
            <h4 className="portfolio__item-title">Одностраничное приложение</h4>
            <img className="portfolio__link-arrow" src={arrow} alt="Стрелка"/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio