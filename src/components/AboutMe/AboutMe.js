import React from "react"
import './AboutMe.css'
import avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className="aboutMe" id="about-me">
      <h2 className="aboutMe__title">Студент</h2>
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
    </section>
  )
}

export default AboutMe