import * as TYPES from './types';
import { action } from 'typesafe-actions';

export const getPokemonsFetching = () => action(
  TYPES.PokemonsActionsConst.GET_POKEMONS_FETCHING
);

export const getPokemonsFulfilled = (data: TYPES.Pokemon[]) => action(
  TYPES.PokemonsActionsConst.GET_POKEMONS_FULFILLED,
  data
);

export const getPokemonsRejected = (error: TYPES.Error) => action(
  TYPES.PokemonsActionsConst.GET_POKEMONS_REJECTED,
  error
);

export const getPokemonInfoFetching = () => action(
  TYPES.PokemonsActionsConst.GET_POKEMON_INFO_FETCHING
);

export const getPokemonInfoFulfilled = (data: any) => action(
  TYPES.PokemonsActionsConst.GET_POKEMON_INFO_FULFILLED,
  data
);

export const getPokemonInfoRejected = (error: TYPES.Error) => action(
  TYPES.PokemonsActionsConst.GET_POKEMON_INFO_REJECTED,
  error
);

export const filterPokemons = (data: any) => action(
  TYPES.PokemonsActionsConst.FILTER_POKEMONS,
  data
);