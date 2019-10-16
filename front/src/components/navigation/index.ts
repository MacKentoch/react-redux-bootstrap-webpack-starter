import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import NavigationBar from './NavigationBar';
import { RootState } from '../../redux/modules/types';
import { UserAuthActions } from '../../redux/modules/userAuth/type';
import { Link } from '../../config/navigation';

// #region redux map state and dispatch to props

// #region types
export type MappedStateToProps = {
  token: string,
  isAuthenticated: boolean,
};
export type OwnProps = {
  brand: string,
  leftNavItemClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    viewName?: string,
  ) => any,
  rightNavItemClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    viewName?: string,
  ) => any,
  navModel: {
    leftLinks: Array<Link>,
    rightLinks: Array<Link>,
  },
};
export type MappedDispatchToProps = {} & UserAuthActions;
// #endregion

const mapStateToProps = (state: RootState) => {
  return {
    token: state.userAuth.token,
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
)(NavigationBar);
