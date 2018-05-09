// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import Home from './Home';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  connect(mapStateToProps, mapDispatchToProps),
)(Home);
