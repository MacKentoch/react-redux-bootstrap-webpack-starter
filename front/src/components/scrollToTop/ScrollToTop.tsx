import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToTopOnLocationChange } from './hooks/useScrollToTopOnLocationChange';
type OwnProps = {
  children: any;
};
type Props = OwnProps;

function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useScrollToTopOnLocationChange(location);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
