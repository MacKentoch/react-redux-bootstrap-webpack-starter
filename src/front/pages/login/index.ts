import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import { RootState } from '../../redux/modules/types';
import { UserAuthActions } from '../../redux/modules/userAuth/type'

// #region redux map state and dispatch to props

// #region types
export type MappedStateToProps = {
  isAuthenticated: boolean,
  isFetching: boolean,
  isLogging: boolean
};
export type OwnProps = {};

export type MappedDispatchToProps = UserAuthActions;
// #endregion


const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

export default compose<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Login);
