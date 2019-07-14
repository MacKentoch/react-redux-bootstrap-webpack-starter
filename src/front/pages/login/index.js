// @flow

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging,
  };
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
)(Login);
