import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReduxProps } from './';
import css from './public.module.css';
import uniq from 'lodash.uniq';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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

  const [categorySelected, setCategorySelected] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategorySelected(event.target.value as string);
  };

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
              {/* <div className={css.categoriesContainer}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Categorías</InputLabel>
                  <Select
                    className={css.selectInput}
                    value={categorySelected}
                    label="Categorías"
                    onChange={handleChange}
                    placeholder='Categorías'
                  >
                    {categoriesFilter.map((category: any) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div> */}
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