import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import LogoutRoute from './LogoutRoute';

// #region redux map state and dispatch to props
const mapStateToProps = (/* state: RootState */) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

// #region types
export type ReduxConnectedProps = UserAuthActions;
export type OwnProps = Record<string, any>;
// #endregion

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(LogoutRoute);
