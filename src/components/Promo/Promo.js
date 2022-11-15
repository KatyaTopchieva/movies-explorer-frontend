import './Promo.css'
import NavTab from '../NavTab/NavTab'
import landing_logo from '../../images/landing_logo.svg'

function Promo() {
  return (
    <section className='promo'>
      <img className='promo__image' src={landing_logo} alt='Логотип Веб' />
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <h3 className='promo__subtitle'>
      Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </h3>
      <NavTab />
    </section>
  );
}

export default Promo;