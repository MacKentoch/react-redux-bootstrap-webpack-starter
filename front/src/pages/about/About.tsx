import React from 'react';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, MappedStateToProps, MappedDispatchToProps } from './index';

// #region types
type Props = OwnProps & MappedStateToProps & MappedDispatchToProps;
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
