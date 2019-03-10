// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import PrivateRoute from './PrivateRoute';
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withRouter,
)(PrivateRoute);
