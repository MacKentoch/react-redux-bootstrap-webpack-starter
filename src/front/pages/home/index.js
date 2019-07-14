// @flow

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Home from './Home';

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
// #endregion

export default compose(
  // $FlowIgnore
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home);
