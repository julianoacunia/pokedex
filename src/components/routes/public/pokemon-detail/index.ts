import Component from './pokemon-detail';
import { getPokemons, getPokemonInfo, getFeatures } from 'src/redux/modules/pokemon/thunks';
import { filterPokemons } from 'src/redux/modules/pokemon/actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'src/redux/modules';

interface StateProps {
  isFetching: DVPState['pokemon']['isFetching'];
  pokemons: DVPState['pokemon']['pokemons'];
  error: DVPState['pokemon']['error'];
  filterPokemon: DVPState['pokemon']['filterPokemon'];
  pokemonDetail: DVPState['pokemon']['pokemonDetail'];
  pokemonFeatures: DVPState['pokemon']['features'];
}

const mapStateToProps = (state: DVPState) => {
  return {
    isFetching: state.pokemon.isFetching,
    error: state.pokemon.error,
    pokemons: state.pokemon.pokemons,
    filterPokemon: state.pokemon.filterPokemon,
    pokemonDetail: state.pokemon.pokemonDetail,
    pokemonFeatures: state.pokemon.features,
  };
};
export interface DispatchProps {
  getPokemons: typeof getPokemons;
  filterPokemons: typeof filterPokemons;
  getPokemonInfo: typeof getPokemonInfo;
  getFeatures: typeof getFeatures;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    getPokemons,
    filterPokemons,
    getPokemonInfo,
    getFeatures
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component as any);
export type ReduxProps = StateProps & DispatchProps;