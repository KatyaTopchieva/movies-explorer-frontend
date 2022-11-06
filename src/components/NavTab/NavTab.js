import './NavTab.css'

function NavTab() {

  return (
    <nav className='navtab'>
      <ul className='navtab__list'>
        <li className='navtab__item'>
          <a className='navtab__link' href='#about-project'>О проекте</a>
        </li>
        <li className='navtab__item'>
          <a className='navtab__link' href='#techs'>Технологии</a>
        </li>
        <li className='navtab__item'>
          <a className='navtab__link' href='#about-me'>Студент</a>
        </li>
      </ul>
      <button className='navtab__button'>
        <a className='navtab__button-link' href='#about-project'>Узнать больше</a>
      </button>
    </nav>
  );
};
  
export default NavTab;