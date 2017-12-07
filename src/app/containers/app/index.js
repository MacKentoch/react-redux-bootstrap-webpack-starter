// @flow weak

import { connect }            from 'react-redux';
import {
  bindActionCreators,
  compose
}                             from 'redux';
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

// we use here compose (from redux) just for conveniance (since compose(f,h, g)(args) looks better than f(g(h(args))))
export default compose(
  withRouter, // IMPORTANT: witRouter is "needed here" to avoid blocking routing:
  connect(mapStateToProps, mapDispatchToProps)
)(App);
