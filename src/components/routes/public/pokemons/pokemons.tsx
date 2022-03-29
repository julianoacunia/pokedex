import React, { useEffect, useState } from 'react';
import { ReduxProps } from '.';
import PokemonCard from 'src/components/shared/pokemon-card';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import css from './pokemons.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from 'src/redux/modules/pokemon/types';

interface AutocompleteOptions {
  value: string;
  label: string;
}

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
  const onSearch = () => {
    const listFilter: Pokemon[] = [];
    pokemons.forEach((pokemon) => {
      if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
        listFilter.push(pokemon);
      }
      if (pokemon.id.toString().toLowerCase().includes(search.toLowerCase())) {
        listFilter.push(pokemon);
      }
    });
    filterPokemons(listFilter);
    if (search === '') {
      filterPokemons(pokemons);
    }
  }

  const navigate = useNavigate();

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
                options={filterPokemon.map((item) => {
                  return {
                    value: item.name,
                    label: item.name
                  }
                })}
                renderOption={(option: any) => {
                  const selectedPokemon = filterPokemon.find((item) => item.name === option.key);
                  if (!selectedPokemon) {
                    return null;
                  }
                  return (
                    <div className={css.optionStyle} onClick={() => navigate(`/pokemon/${selectedPokemon.id}`)}>
                      {option.key}
                    </div>
                  )
                }}
                clearIcon={() => setSearch('')}
                getOptionLabel={(option: AutocompleteOptions) => option.label ? option.label : ''}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                sx={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <div>
                    <TextField
                      {...params}
                      value={search}
                      label={search}
                      onKeyDown={() => onSearch()}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='Buscar'
                    />
                  </div>
                )}
              />
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