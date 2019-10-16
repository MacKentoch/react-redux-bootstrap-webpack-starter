import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import { UserAuthActions } from '../../redux/modules/userAuth/type';
import { RootState } from '../../redux/modules/types';
import PrivateRoute from './PrivateRoute';

// #region redux map state and dispatch to props
// #region types
export type MappedStateToProps = {
  isAuthenticated: boolean,
};
export type OwnProps = {
  component: any,
  path: string,
};

export type MappedDispatchToProps = {} & UserAuthActions;
// #endregion

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
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
  withRouter,
)(PrivateRoute);
