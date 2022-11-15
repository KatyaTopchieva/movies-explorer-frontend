import './Techs.css'
import React from 'react'

function Techs()
{  
    return (
      <article className="techs" id="techs">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__cards">
            <li className="techs__card">HTML</li>
            <li className="techs__card">CSS</li>
            <li className="techs__card">JS</li>
            <li className="techs__card">React</li>
            <li className="techs__card">Git</li>
            <li className="techs__card">Express.js</li>
            <li className="techs__card">MongoDB</li>
        </ul>
      </article>
    );
}

export default Techs