// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import LightNote from './styled/LightNote';
// #endregion

// #region flow types
export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

export type State = any;
// #endregion

class Home extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <Jumbotron>
          <HomeInfo>
            <MainTitle>ReactJS 16.3+ Bootstrap 4</MainTitle>
            <h2>
              with Hot Reload (<i>react-hot-loader 4+</i>
              )!!!
            </h2>
            <h2>and React Router v4</h2>
            <h2>and webpack 4.x</h2>
            <h2>
              and styled-components (
              <LightNote>
                so keep using SCSS like styles and benefit performant css-in-js
              </LightNote>
              )
            </h2>
            <h1>Starter</h1>
            <p>
              <Link className="btn btn-success btn-lg" to={'/about'}>
                <i className="fa fa-info" />
                &nbsp; go to about
              </Link>
            </p>
          </HomeInfo>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default Home;
