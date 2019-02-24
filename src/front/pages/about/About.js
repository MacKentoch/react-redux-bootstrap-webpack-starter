// @flow

// #region imports
import React from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
// #endregion

function About(props: Props) {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

About.displayName = 'About';

export default About;
