import React, {
  Component,
  PropTypes
}                             from 'react';
import {NavigationBar}        from '../../components';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel
    };
    // bind callbacks here (rather than in render()) for better performance
    this.handleLeftNavItemClick = this.handleLeftNavItemClick.bind(this);
    this.handleRightNavItemClick = this.handleRightNavItemClick.bind(this);
  }

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
      <div>
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
      <h1>
      </h1>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    );
  }

  handleLeftNavItemClick(event, viewName) {
    // something to do here?
  }

  handleRightNavItemClick(event, viewName) {
    // something to do here?
  }
}


// statics :
App.propTypes = {
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object
};


const mapStateToProps = (state) => {
  return {
    currentView:  state
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
