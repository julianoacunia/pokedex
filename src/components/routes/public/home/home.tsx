import React, { useEffect, useState } from 'react';
import { ReduxProps } from '.';
import PokemonCard from 'src/components/shared/pokemon-card';
import CircularProgress from '@mui/material/CircularProgress';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import css from './home.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


const Home: React.FC<ReduxProps> = (props) => {
  const {
    isFetching,
    getPokemons,
    pokemons,
    filterPokemons,
    filterPokemon
  } = props;

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const [search, setSearch] = useState('');
  console.log('SEARCH', search);
  const onSearch = () => {
    // const response = pokemons.find((pokemon) => pokemon.name === search || pokemon.id.toString() === search);
    const listFilter: any = [];
    pokemons.forEach((pokemon) => {
      if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
        listFilter.push(pokemon);
      }
      if (pokemon.id.toString().toLowerCase().includes(search.toLowerCase())) {
        listFilter.push(pokemon);
      }
    });
    console.log('listFilter', listFilter);
    filterPokemons(listFilter);
    if (search === '') {
      // console.log('ESTOY VACIO');
      filterPokemons(pokemons);
    }
  }
  interface FilmOptionType {
    inputValue?: string;
    title: string;
    year?: number;
  }

  const filter = createFilterOptions<FilmOptionType>();

  console.log('FILTER', filterPokemon.length)

  return (
    <>
      <div className={css.container}>
        <div className={css.search}>
          <Grid item xs={12} sm={12}>
            <Paper elevation={2}>
              <Autocomplete
                value={{ value: search, label: search }}
                onChange={(event: any) => setSearch(event.target.value)}
                onKeyDown={(event: any) => {
                  setSearch(event.target.value)
                  onSearch()
                }}
                onKeyUp={(event: any) => {
                  setSearch(event.target.value)
                  onSearch()
                }}
                options={filterPokemon.map((item) => item.name)}
                renderOption={(option: any) => {
                  console.log('option', option)
                  return (
                    <div className={css.optionStyle}>
                      {option.key}
                    </div>
                  )
                }}
                noOptionsText={search ? 'ACA' : 'no se encontraron opciones'}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <div>
                    {/* <InputBase
                      {...params}
                      value={search}
                      placeholder='Buscar'
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={() => onSearch()}
                    />
                    <IconButton onClick={onSearch}>
                      <SearchIcon />
                    </ IconButton> */}
                    <TextField
                      {...params}
                      value={search}
                      label={search}
                      // disabled={disabled}
                      onKeyDown={() => onSearch()}
                      onChange={(e) => setSearch(e.target.value)}
                      className={css.textFieldStyle}
                    />
                  </div>
                )}
              />
              {/* <InputBase
                value={search}
                placeholder='Buscar'
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={() => onSearch()}
              /> */}
            </Paper>
          </Grid>
        </div>
        <div>
        </div>
        <div className={css.pokemonContainer}>
          {isFetching ?
            <CircularProgress />
            :
            filterPokemon.length !== 0 ?
              filterPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))
              :
              <div>
                aca
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default Home;