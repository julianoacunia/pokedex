import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { DVPState } from '..';
import * as ACTIONS from './actions';
import * as API from './api';
import axios from 'axios';

export const getPokemons = () => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getPokemonsFetching());
  try {
    const response = await API.getPokemons();
    const parseData = [];
    for (const item of response.data.results) {
      const pokemon = await axios.get(item.url);
      parseData.push(pokemon.data);
    }
    return dispatch(ACTIONS.getPokemonsFulfilled(parseData));
  }
  catch (error: any) {
    return dispatch(ACTIONS.getPokemonsRejected(error));
  }
};

export const getPokemonInfo = (pokemonId: string) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getPokemonInfoFetching());
  try {
    const response = await API.getPokemonInfo(pokemonId);
    return dispatch(ACTIONS.getPokemonInfoFulfilled(response.data));
  }
  catch (error: any) {
    return dispatch(ACTIONS.getPokemonInfoRejected(error));
  }
};

export const getFeatures = (pokemonId: string) => async (dispatch: ThunkDispatch<DVPState, {}, AnyAction>) => {
  dispatch(ACTIONS.getFeaturesFetching());
  try {
    const response = await API.getFeatures(pokemonId);
    return dispatch(ACTIONS.getFeaturesFulfilled(response.data));
  }
  catch (error: any) {
    return dispatch(ACTIONS.getFeaturesRejected(error));
  }
};