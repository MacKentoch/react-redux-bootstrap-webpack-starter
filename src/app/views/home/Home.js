import React, {
  Component,
  PropTypes
}                     from 'react';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';

class Home extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
          <h1>
            Full ES2015 ReactJS + Bootstrap
          </h1>
          <h2>
            with Hot Reload!!!
          </h2>
          <h2>
            with React Router (SPA)
          </h2>
          <h1>
            Starter
          </h1>
          <h1></h1>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info"></i>
              &nbsp;
              go to about
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

Home.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Home;
