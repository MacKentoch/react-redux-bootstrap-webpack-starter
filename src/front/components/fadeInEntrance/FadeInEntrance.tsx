import React from 'react';
import FadeInDiv from './styled/FadeInDiv';

// #region types
type Props = {
  children: any,
};
// #endregion

function FadeInEntrance({ children }: Props) {
  return <FadeInDiv startAnimation>{children}</FadeInDiv>;
}

FadeInEntrance.displayName = 'FadeInEntrance';

export default FadeInEntrance;
