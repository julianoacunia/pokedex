import { PokemonsState } from './types';

const initialState: PokemonsState = {
  pokemons: [],
  error: undefined,
  isFetching: false,
  selectedIndex: -1,
  filterPokemon: [],
  pokemonDetail: undefined,
  features: undefined,
};

export default initialState;