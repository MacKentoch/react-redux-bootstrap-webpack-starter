// @flow

import React, { Fragment, useEffect, useRef } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { withRouter } from 'react-router';

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  children: any,
};
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

// $FlowIgnore
export default withRouter(ScrollToTop);
