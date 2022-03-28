import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ReduxProps } from '.';
import PokemonCard from 'src/components/shared/pokemon-card';
import CircularProgress from '@mui/material/CircularProgress';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import css from './pokemon-detail.module.css';
import axios from 'axios';
import cx from 'classnames';

const Home: React.FC<ReduxProps> = (props) => {
  const {
    isFetching,
    getPokemons,
    pokemons,
    filterPokemons,
    filterPokemon,
    getPokemonInfo
  } = props;

  const [search, setSearch] = useState('');
  const location = useLocation();
  const pokemonId = location.pathname.split('/')[1];

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  let pokemon;
  if (pokemonId) {
    pokemon = pokemons.find((item) => item.id.toString() === pokemonId);
    console.log('POKEMON', pokemon);
  }

  // const getInfoPokemon = useCallback(async () => {
  //   const response = await axios.get(`https://pokeapi.co/api/v2/ability/${pokemonId}`)
  //   return response.data;
  // }, [pokemonId]);

  useEffect(() => {
    getPokemonInfo(pokemonId);
  }, [getPokemonInfo, pokemonId])

  console.log('location', location.pathname.split('/')[1]);

  // const asd = getInfoPokemon();
  // console.log('RESPOSE',);

  return (
    <>
      <div className={css.container}>
        <div className={css.firstColumn}>
          <div className={css.containerNameAndId}>
            <div className={css.pokemonId}>
              {`#${pokemon.id}`}
            </div>
            <div className={css.pokemonName}>
              {pokemon.name}
            </div>
            <div className={css.ContainerPokemonType}>
              {pokemon.types.map((item: any) => {
                const isFire = item.type.name === 'fire';
                const isNormal = item.type.name === 'normal';
                const isBug = item.type.name === 'bug';
                const isPoison = item.type.name === 'poison';
                const isGrass = item.type.name === 'grass';
                const isFlying = item.type.name === 'flying';
                return (
                  <div className={cx({
                    [css.pokemonTypeFire]: isFire,
                    [css.pokemonTypeNormal]: isNormal,
                    [css.pokemonTypeBug]: isBug,
                    [css.pokemonTypePoison]: isPoison,
                    [css.pokemonTypeGrass]: isGrass,
                    [css.pokemonTypeFlying]: isFlying,
                  })}>
                    {item.type.name}
                  </div>
                )
              })
              }
            </div>
          </div>
          <div className={css.containerImage}>
            <img className={css.img} src={pokemon.sprites.front_default} alt="" />
          </div>
        </div>
        <div className={css.secondColumn}>
          <div className={css.containerInfo}>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;