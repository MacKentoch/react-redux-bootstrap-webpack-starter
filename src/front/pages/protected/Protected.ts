import React from 'react';
import FadeInEntrance from '../../components/fadeInEntrance';

// #region types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
};
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
