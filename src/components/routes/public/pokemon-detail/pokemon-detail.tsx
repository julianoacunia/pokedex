import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReduxProps } from '.';
import css from './pokemon-detail.module.css';
import cx from 'classnames';
import { capitalizeFirstLetter } from 'src/helper';
import { Types } from 'src/redux/modules/pokemon/types';

const Home: React.FC<ReduxProps> = (props) => {
  const {
    getPokemons,
    pokemons,
    getPokemonInfo,
    pokemonDetail,
    getFeatures,
    pokemonFeatures,
  } = props;

  const location = useLocation();
  const pokemonId = location.pathname.split('pokemon/')[1];

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  let pokemon;
  if (pokemonId) {
    pokemon = pokemons.find((item) => item.id.toString() === pokemonId);
  }

  useEffect(() => {
    getPokemonInfo(pokemonId);
    getFeatures(pokemonId);
  }, [getPokemonInfo, pokemonId, getFeatures])

  if (!pokemon) {
    return null;
  }

  if (!pokemonDetail) {
    return null;
  }

  if (!pokemonFeatures) {
    return null;
  }

  return (
    <>
      <div className={css.container}>
        <div className={css.firstColumn}>
          <div className={css.containerNameAndId}>
            <div className={css.pokemonId}>
              {`#${pokemon.id}`}
            </div>
            <div className={css.pokemonName}>
              {capitalizeFirstLetter(pokemon.name)}
            </div>
            <div className={css.ContainerPokemonType}>
              {pokemon.types.map((item: Types) => {
                const isFire = item.type.name === 'fire';
                const isNormal = item.type.name === 'normal';
                const isBug = item.type.name === 'bug';
                const isPoison = item.type.name === 'poison';
                const isGrass = item.type.name === 'grass';
                const isFlying = item.type.name === 'flying';
                const isWater = item.type.name === 'water';
                return (
                  <div className={cx({
                    [css.pokemonTypeFire]: isFire,
                    [css.pokemonTypeNormal]: isNormal,
                    [css.pokemonTypeBug]: isBug,
                    [css.pokemonTypePoison]: isPoison,
                    [css.pokemonTypeGrass]: isGrass,
                    [css.pokemonTypeFlying]: isFlying,
                    [css.pokemonTypeWater]: isWater
                  })}>
                    {capitalizeFirstLetter(item.type.name)}
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
          <div className={css.containerGeneralInformation}>
            <div className={css.containerInfo}>
              <h2>Abilities</h2>
              {pokemonDetail.effect_entries.map((effect) => {
                if (effect.language.name === 'en') {
                  return (
                    <p>{effect.effect}</p>
                  );
                }
                return undefined;
              })}
            </div>
            <div className={css.containerInfo}>
              <h2>Characteristics</h2>
              {pokemonFeatures.descriptions.map((description) => {
                if (description.language.name === 'en') {
                  return (
                    <p>{description.description}</p>
                  );
                }
                return undefined;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;