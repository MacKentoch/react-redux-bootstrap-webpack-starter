import React from 'react';
import { RouteComponentProps } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';

// #region types
export type Props = any & RouteComponentProps;
// #endregion

function Protected(props: Props) {
  return (
    <FadeInEntrance>
      <h1>Protected view</h1>
      <h3>If you can read, it means you are authenticated</h3>
    </FadeInEntrance>
  );
}

Protected.displayName = 'Protected';

export default Protected;
