import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userAuthActions from '../../redux/modules/userAuth';
import NavigationBar from './NavigationBar';
import { Link } from '../../config/navigation';
import {
  makeGetIsAuthenticatedSelector,
  makeGetTokenSelector,
} from '../../redux/modules/userAuth/selectors';

// #region create selectors instances
const getIsAuthenticated = makeGetIsAuthenticatedSelector();
const getToken = makeGetTokenSelector();
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = (state: RootState) => {
  return {
    token: getToken(state),
    isAuthenticated: getIsAuthenticated(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ ...userAuthActions }, dispatch);
};
// #endregion

// #region types
export type OwnProps = {
  brand: string;
  leftNavItemClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    viewName?: string,
  ) => any;
  rightNavItemClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    viewName?: string,
  ) => any;
  navModel: {
    leftLinks: Array<Link>;
    rightLinks: Array<Link>;
  };
};
export type ReduxConnectedProps = Pick<
  UserAuthState,
  'isAuthenticated' | 'token'
> &
  UserAuthActions;
// #endregion

export default compose<any>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(NavigationBar);
