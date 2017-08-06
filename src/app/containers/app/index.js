// @flow weak

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import App                    from './App';
import { withRouter }         from 'react-router';

const mapStateToProps = (state) => {
  return {
    // views
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      ...viewsActions
    },
    dispatch
  );
};

// IMPORTANT: witRouter is "needed here" to avoid blocking routing:
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
