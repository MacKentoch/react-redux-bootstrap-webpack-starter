import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import PrivateRoute from './PrivateRoute';
import { makeGetIsAuthenticatedSelector } from '../../redux/modules/userAuth/selectors';

// #region create selectors instances
const getIsAuthenticated = makeGetIsAuthenticatedSelector();
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: getIsAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

// #region types
export type ReduxConnectedProps = Pick<UserAuthState, 'isAuthenticated'> &
  UserAuthActions;
export type OwnProps = Record<string, any>;
// #endregion

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(PrivateRoute);
