import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import { RootState } from '../../redux/modules/types';
import { UserAuthActions } from '../../redux/modules/userAuth/type'

// #region redux map state and dispatch to props
const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging,
  };
};
export type MappedProps = {
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean
};

type FromReduxActions = {} & UserAuthActions;
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
export type MappedDispatchToProps = FromReduxActions;
// #endregion

export default compose<Login>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
