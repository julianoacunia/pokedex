import Component from './home';
import { getPokemons } from 'src/redux/modules/pokemon/thunks';
import { filterPokemons } from 'src/redux/modules/pokemon/actions';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'src/redux/modules';

interface StateProps {
  isFetching: DVPState['pokemon']['isFetching'];
  pokemons: DVPState['pokemon']['pokemons'];
  error: DVPState['pokemon']['error'];
  filterPokemon: DVPState['pokemon']['filterPokemon'];
}

const mapStateToProps = (state: DVPState) => {
  return {
    isFetching: state.pokemon.isFetching,
    error: state.pokemon.error,
    pokemons: state.pokemon.pokemons,
    filterPokemon: state.pokemon.filterPokemon,
  };
};
export interface DispatchProps {
  getPokemons: typeof getPokemons;
  filterPokemons: typeof filterPokemons;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    getPokemons,
    filterPokemons
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component as any);
export type ReduxProps = StateProps & DispatchProps;
