'use strict';

import React            from 'react';
import NavigationBar    from '../../components/navigation/NavigationBar.jsx';
import navigationModel  from '../../models/navigation.model.json';
import { connect }      from 'react-redux';
import {
  enterHome,
  // leaveHome,
  enterAbout // ,
  // leaveAbout
}                       from '../../redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel
    };
  }

  handleLeftNavItemClick(event, viewName) {
    if (viewName === 'home') {
      const now = new Date();
      this.props.dispatch(enterHome(now));
    }

    if (viewName === 'about') {
      const now = new Date();
      this.props.dispatch(enterAbout(now));
    }
  }

  handleRightNavItemClick(event, viewName) {
    if (viewName === 'home') {
      const now = new Date();
      this.props.dispatch(enterHome(now));
    }

    if (viewName === 'about') {
      const now = new Date();
      this.props.dispatch(enterAbout(now));
    }
  }

  render() {
    return (
      <div>
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
          handleLeftNavItemClick={
            (ev, view) => this.handleLeftNavItemClick(ev, view)
          }
          handleRightNavItemClick={
            (ev, view) => this.handleRightNavItemClick(ev, view)
          }
        />
      <h1>
      </h1>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentView:  state
  };
};

// statics :
App.propTypes = {
  children:   React.PropTypes.node,
  history:    React.PropTypes.object,
  location:   React.PropTypes.object,

  dispatch:     React.PropTypes.func
  // appState:     React.PropTypes.object,
  // currentView:  React.PropTypes.object
};

export default connect(
  mapStateToProps
)(App);
