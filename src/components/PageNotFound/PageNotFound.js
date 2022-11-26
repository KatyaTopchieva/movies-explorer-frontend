import React from "react"
import './PageNotFound.css'
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
    history.goBack();
  };

  return (
    <section className="pagenotfaund">
      <p className="pagenotfaund__code">404</p>
      <p className="pagenotfaund__text">Страница не найдена</p>
      <button 
        className="pagenotfaund__link"
        type="button"
        onClick={handleGoBack}
      >
        Назад
      </button>
    </section>
  )
}

export default PageNotFound
