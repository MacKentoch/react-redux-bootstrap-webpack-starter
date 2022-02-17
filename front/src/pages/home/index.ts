import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import Home from './Home';

// #region redux map state and dispatch to props
const mapStateToProps = (/* state: RootState */) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({}, dispatch);
};
// #endregion

// #region types
export type ReduxConnectedProps = Record<string, any>;
export type OwnProps = Record<string, any>;
// #endregion

const connector = connect(mapStateToProps, mapDispatchToProps);
export default compose<any>(connector)(Home);
