import React from 'react';
import { RouteComponentProps } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, MappedStateToProps, MappedDispatchToProps } from './index';

// #region types
export type Props = RouteComponentProps &
  MappedDispatchToProps &
  MappedStateToProps &
  OwnProps;
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
