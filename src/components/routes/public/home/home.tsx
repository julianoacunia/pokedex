import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './home.module.css';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={css.container}>
        <div className={css.containerImg}>
          <img className={css.logo} src="https://alanmorel.pythonanywhere.com/static/images/logo.png" alt="" />
        </div>
        <div className={css.containerButton}>
          <button className={css.button} onClick={() => navigate('/pokemons')}>Ver Pokemons</button>
        </div>
      </div>
    </>
  );
};

export default Home;