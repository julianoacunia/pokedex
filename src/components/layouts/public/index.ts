import { connect } from 'react-redux';
import { RootAction, DVPState } from 'src/redux/modules';
import { bindActionCreators, Dispatch } from 'redux';
import Component from './public';

export interface StateProps {
}

const mapStateToProps = (state: DVPState) => ({
});

export interface DispatchProps {
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({

  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);

export type ReduxProps = StateProps & DispatchProps;
