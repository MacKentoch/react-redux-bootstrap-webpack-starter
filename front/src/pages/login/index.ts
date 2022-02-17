import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import {
  makeGetIsAuthenticatedSelector,
  makeGetIsFetchingSelector,
  makeGetIsLoggingSelector,
} from '../../redux/modules/userAuth/selectors';

// #region create selectors instances
const getIsAuthenticated = makeGetIsAuthenticatedSelector();
const getIsFetching = makeGetIsFetchingSelector();
const getIsLogging = makeGetIsLoggingSelector();
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = (state: RootState /* , ownProps: OwnProps */) => {
  return {
    isAuthenticated: getIsAuthenticated(state),
    isFetching: getIsFetching(state),
    isLogging: getIsLogging(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

// #region types
export type ReduxConnectedProps = Pick<
  UserAuthState,
  'isAuthenticated' | 'isFetching' | 'isLogging'
> &
  UserAuthActions;
export type OwnProps = Record<string, any>;
// #endregion

const connector = connect(mapStateToProps, mapDispatchToProps);
export default compose<any>(connector)(Login);
