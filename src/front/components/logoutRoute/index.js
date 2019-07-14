// @flow

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import LogoutRoute from './LogoutRoute';

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

export default compose(
  // $FlowIgnore
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(LogoutRoute);
