import React, { Fragment, useEffect, useRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

// #region types
type Props = {
  children: any,
} & RouteComponentProps;
// #endregion

function useScrollToTopOnLocationChange(location: any) {
  const prevLocation = useRef();

  useEffect(() => {
    prevLocation.current = location;
  }, []);

  useEffect(() => {
    if (prevLocation.current !== location) {
      window && window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);
}

function ScrollToTop({ children, location }: Props) {
  useScrollToTopOnLocationChange(location);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.displayName = 'ScrollToTop';

export default withRouter(ScrollToTop);
