// @flow

import React from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import FadeInEntrance from '../../components/fadeInEntrance';

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
};
// #endregion

function About(props: Props) {
  return (
    <FadeInEntrance>
      <h1>About</h1>
    </FadeInEntrance>
  );
}

About.displayName = 'About';

export default About;
