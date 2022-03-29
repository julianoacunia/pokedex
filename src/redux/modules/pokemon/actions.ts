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

export const getPokemonInfoFulfilled = (data: TYPES.PokemonInfo) => action(
  TYPES.PokemonsActionsConst.GET_POKEMON_INFO_FULFILLED,
  data
);

export const getPokemonInfoRejected = (error: TYPES.Error) => action(
  TYPES.PokemonsActionsConst.GET_POKEMON_INFO_REJECTED,
  error
);

export const filterPokemons = (data: TYPES.Pokemon[]) => action(
  TYPES.PokemonsActionsConst.FILTER_POKEMONS,
  data
);

export const getFeaturesFetching = () => action(
  TYPES.PokemonsActionsConst.GET_FEATURES_FETCHING
);

export const getFeaturesFulfilled = (data: TYPES.PokemonFeatures) => action(
  TYPES.PokemonsActionsConst.GET_FEATURES_FULFILLED,
  data
);

export const getFeaturesRejected = (error: TYPES.Error) => action(
  TYPES.PokemonsActionsConst.GET_FEATURES_REJECTED,
  error
);