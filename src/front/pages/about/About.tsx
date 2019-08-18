import React from 'react';
import { RouteComponentProps } from 'react-router';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import FadeInEntrance from '../../components/fadeInEntrance';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// #region types
type Props = {} & RouteComponentProps;
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
