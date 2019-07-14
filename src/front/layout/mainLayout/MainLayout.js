// @flow

import React, { Fragment, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router';
import { type Match, type Location, type RouterHistory } from 'react-router';
import NavigationBar from '../../components/navigation';
import BackToTop from '../../components/backToTop/BackToTop';
import navigationModel from '../../config/navigation';
import registerServiceWorker from '../../services/sw/registerServiceWorker';

// #region flow types
type Props = {
  // from withRouter HOC:
  match: Match,
  location: Location,
  history: RouterHistory,

  children: any,
};
// #endregion

// #region MainLayout HOC
function MainLayout({ history, location, match, children }: Props) {
  // #region on mount effect
  useEffect(() => {
    if (typeof window !== undefined) {
      // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
      registerServiceWorker();
    }
  }, []);
  // #endregion

  // #region callbacks
  /* eslint-disable no-unused-vars*/
  const handleLeftNavItemClick = useCallback((
    event: SyntheticEvent<>,
    viewName: string,
  ) => {
    // something to do here?
  }, []);

  const handleRightNavItemClick = useCallback((
    event: SyntheticEvent<>,
    viewName: string,
  ) => {
    // something to do here?
  }, []);
  // #endregion

  return (
    <Fragment>
      <div id="appContainer">
        <NavigationBar
          brand={navigationModel.brand}
          navModel={navigationModel}
          handleLeftNavItemClick={handleLeftNavItemClick}
          handleRightNavItemClick={handleRightNavItemClick}
        />
        <div className="container-fluid">{children}</div>
        <BackToTop minScrollY={40} scrollTo={'appContainer'} />
      </div>
    </Fragment>
  );
}

// $FlowIgnore
export default withRouter(MainLayout);
