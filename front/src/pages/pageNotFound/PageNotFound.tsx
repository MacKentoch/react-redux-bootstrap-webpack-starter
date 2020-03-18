import React from 'react';
import { RouteComponentProps } from 'react-router';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, MappedStateToProps, MappedDispatchToProps } from './index';

// #region types
export type Props = RouteComponentProps &
  MappedDispatchToProps &
  MappedStateToProps &
  OwnProps;
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
