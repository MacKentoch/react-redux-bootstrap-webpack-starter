import React, { Fragment, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToTopOnLocationChange } from './hooks/useScrollToTopOnLocationChange';
type OwnProps = {
  children: ReactNode;
};
type Props = OwnProps;

function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useScrollToTopOnLocationChange(location);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.displayName = 'ScrollToTop';

export default ScrollToTop;
