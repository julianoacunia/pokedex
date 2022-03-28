import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReduxProps } from './';
import css from './public.module.css';
import uniq from 'lodash.uniq';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export interface Props extends ReduxProps {
  children: React.ReactNode;
  showSearchField?: boolean;
}

const PublicLayout: React.FC<Props> = (props) => {

  const {
    children,
    pokemons,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const categories: any = [];
  pokemons.forEach((pokemon) => {
    pokemon.types.forEach((item: any) => {
      categories.push(item.type.name)
    })
  });

  const categoriesFilter = uniq(categories);

  return (
    <>
      <div ref={containerRef}>
        <div className={css.headerContainer}>
          <div className={css.header}>
            <div className={css.leftIcons}>
              <div className={css.logoContainer} onClick={() => navigate('/')}>
                <img className={css.logo} src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg?sanitize=true' alt='logo' />
              </div>
              <div className={css.categoriesContainer}>
                {/* <Select
                  value={age}
                  label="Categorías"
                  onChange={handleChange}
                >
                  {
                </Select> */}
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