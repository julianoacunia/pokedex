import { combineReducers, ReducersMapObject } from 'redux';
// reducers
import pokemonReducer from './pokemon/reducer';
// state
import { PokemonsState, ActionsType } from './pokemon/types';

export interface DVPState {
  pokemon: PokemonsState,
}

export type RootAction = ActionsType;

const reducers: ReducersMapObject<DVPState> = {
  pokemon: pokemonReducer,
}

export default combineReducers<DVPState>(reducers);
