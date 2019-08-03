import React, { Fragment, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';
import NavigationBar from '../../components/navigation';
import BackToTop from '../../components/backToTop/BackToTop';
import navigationModel from '../../config/navigation';
import registerServiceWorker from '../../services/sw/registerServiceWorker';

// #region types
type Props = {
  children: any,
} & RouteComponentProps;
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
  const handleLeftNavItemClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, viewName?: string) => {
      // something to do here?
    },
    [],
  );

  const handleRightNavItemClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, viewName?: string) => {
      // something to do here?
    },
    [],
  );
  // #endregion

  return (
    <Fragment>
      <div id="appContainer">
        <NavigationBar
          brand={navigationModel.brand}
          navModel={navigationModel}
          leftNavItemClick={handleLeftNavItemClick}
          rightNavItemClick={handleRightNavItemClick}
        />
        <div className="container-fluid">{children}</div>
        <BackToTop minScrollY={40} scrollTo={'appContainer'} />
      </div>
    </Fragment>
  );
}

export default withRouter(MainLayout);
