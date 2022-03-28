import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReduxProps } from '.';
import css from './pokemon-detail.module.css';
import cx from 'classnames';

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
  const pokemonId = location.pathname.split('/')[1];

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

  const capitalizeFirstLetter = (letter: string) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
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
              {pokemonDetail.effect_entries.map((effect: any) => {
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
              {pokemonFeatures.descriptions.map((description: any) => {
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