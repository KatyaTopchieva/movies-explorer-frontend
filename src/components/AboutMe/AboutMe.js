import React from "react"
import './AboutMe.css'
import avatar from '../../images/avatar.jpg'
import arrow from '../../images/arrow.svg'

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__info">
        <img className="aboutMe__image" src={avatar} alt="Фото студента"/>
        <h3 className="aboutMe__name">Екатерина</h3>
        <h4 className="aboutMe__profession-age">Фронтенд-разработчик, 37лет</h4>
        <p className="aboutMe__info-text">Я живу в Воронеже. Закончила исторический факультет ВГПУ,
          защитила диссертацию. Люблю хорошие книги, музыку и юмор. У меня есть семья &#8209; муж,
          два сына и кот. Все, кроме кота, кодят. Это помогло мне полюбить программирование,
          увлечься им и пройти курс по веб&#8209;разработке
          от Яндекс.Практикум. </p>
        <ul className="aboutMe__contacts">
          <li className="aboutMe__contact">
            <a className="aboutMe__profile" target="_blank" rel="noreferrer"
              href="https://github.com/KatyaTopchieva">Github</a>
          </li>
          <li className="aboutMe__contact">
            <a className="aboutMe__profile" target="_blank" rel="noreferrer"
              href="https://vk.com/etopchieva">VKontakte</a>
          </li>
        </ul>
      </div>
      <div className="aboutMe__portfolio">
        <h3 className="aboutMe__portfolio-title">Портфолио</h3>
        <ul className="aboutMe__list">
          <li className="aboutMe__item">
            <a className="aboutMe__link" target="_blank" rel="noreferrer"
              href="https://katyatopchieva.github.io/russian-travel/">
              <h4 className="aboutMe__item-title">Статичный сайт</h4>
              <img className="aboutMe__link-arrow" src={arrow} alt="Стрелка"/>
            </a>
          </li>
          <li className="aboutMe__item">
            <a className="aboutMe__link" target="_blank" rel="noreferrer"
              href="https://katyatopchieva.github.io/mesto/">
              <h4 className="aboutMe__item-title">Адаптивный сайт</h4>
              <img className="aboutMe__link-arrow" src={arrow} alt="Стрелка"/>
            </a>
          </li>
          <li className="aboutMe__item">
            <a className="aboutMe__link" target="_blank" rel="noreferrer"
              href="https://etopchieva.students.nomoredomains.sbs/">
              <h4 className="aboutMe__item-title">Одностраничное приложение</h4>
              <img className="aboutMe__link-arrow" src={arrow} alt="Стрелка"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutMe