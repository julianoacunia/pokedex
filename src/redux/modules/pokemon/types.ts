import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface PokemonsState {
  pokemons: any[];
  error?: Error;
  isFetching: boolean;
  selectedIndex: number;
  filterPokemon: any[];
  pokemonDetail: any;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Error {
  message: string;
  statusCode: number | string;
}

export type ActionsType = ActionType<typeof actions>;

export enum PokemonsActionsConst {
  GET_POKEMONS_FETCHING = 'GET_POKEMONS_FETCHING',
  GET_POKEMONS_FULFILLED = 'GET_POKEMONS_FULFILLED',
  GET_POKEMONS_REJECTED = 'GET_POKEMONS_REJECTED',

  GET_POKEMON_INFO_FETCHING = 'GET_POKEMON_INFO_FETCHING',
  GET_POKEMON_INFO_FULFILLED = 'GET_POKEMON_INFO_FULFILLED',
  GET_POKEMON_INFO_REJECTED = 'GET_POKEMON_INFO_REJECTED',

  FILTER_POKEMONS = 'FILTER_POKEMONS',
}
