import initialState from './initialState';
import { Reducer } from 'redux';
import {
  PokemonsState,
  ActionsType,
  PokemonsActionsConst,
} from './types';

const reducer: Reducer<PokemonsState, ActionsType> = (state = initialState, action): PokemonsState => {
  switch (action.type) {
    case PokemonsActionsConst.GET_POKEMONS_FETCHING:
    case PokemonsActionsConst.GET_POKEMON_INFO_FETCHING:
    case PokemonsActionsConst.GET_FEATURES_FETCHING:
      {
        return {
          ...state,
          isFetching: true
        };
      }
    case PokemonsActionsConst.GET_POKEMONS_FULFILLED:
      {
        return {
          ...state,
          isFetching: false,
          pokemons: action.payload,
          filterPokemon: action.payload,
        }
      }
    case PokemonsActionsConst.GET_POKEMON_INFO_FULFILLED:
      {
        return {
          ...state,
          isFetching: false,
          pokemonDetail: action.payload,
        }
      }
    case PokemonsActionsConst.GET_FEATURES_FULFILLED:
      {
        return {
          ...state,
          isFetching: false,
          features: action.payload,
        }
      }
    case PokemonsActionsConst.GET_POKEMONS_REJECTED:
    case PokemonsActionsConst.GET_POKEMON_INFO_REJECTED:
    case PokemonsActionsConst.GET_FEATURES_REJECTED:
      {
        return {
          ...state,
          isFetching: false,
          error: {
            message: action.payload.message,
            statusCode: action.payload.statusCode,
          }
        };
      }
    case PokemonsActionsConst.FILTER_POKEMONS:
      {
        return {
          ...state,
          filterPokemon: action.payload,
        }
      }
    default: {
      return state;
    }
  }
}

export default reducer;