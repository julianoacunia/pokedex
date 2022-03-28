import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReduxProps } from './';
import css from './public.module.css';

export interface Props extends ReduxProps {
  children: React.ReactNode;
  showSearchField?: boolean;
}

const PublicLayout: React.FC<Props> = (props) => {

  const {
    children,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <div ref={containerRef}>
        <div className={css.headerContainer}>
          <div className={css.header}>
            <div className={css.leftIcons}>
              <div className={css.logoContainer} onClick={() => navigate('/')}>
                <img className={css.logo} src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true' alt='logo' />
              </div>
            </div>
            <div className={css.rightIcons}>
              <div className={css.logoContainer}>
                <div className={css.navRightContainer}>
                  <button
                    className={css.loginButton}
                    test-id="login-button-home"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.layoutContent}>
          <div className={css.paper}>
            {children}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PublicLayout;