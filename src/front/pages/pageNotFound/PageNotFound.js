// @flow

import React from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
};

// #endregion

function PageNotFound(props: Props) {
  return (
    <FadeInEntrance>
      <Jumbotron>
        <h1>Sorry this page does not exists...</h1>
      </Jumbotron>
    </FadeInEntrance>
  );
}

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
