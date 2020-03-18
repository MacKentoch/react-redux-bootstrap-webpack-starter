import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import { RootState } from '../../redux/modules/types';
import { UserAuthActions } from '../../redux/modules/userAuth/type';

// #region redux map state and dispatch to props
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

// #region connector
const connector = connect(mapStateToProps, mapDispatchToProps);
// #endregion

// #region types
export type MappedStateToProps = ConnectedProps<typeof connector>;
export type OwnProps = {};
export type MappedDispatchToProps = UserAuthActions;
// #endregion

export default compose<any>(connector)(Login);
