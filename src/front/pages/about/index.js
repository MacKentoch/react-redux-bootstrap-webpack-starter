// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import About from './About';
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
)(About);
