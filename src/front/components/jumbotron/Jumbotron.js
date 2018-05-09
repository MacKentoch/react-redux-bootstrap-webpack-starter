// @flow

// #region imports
import React from 'react';
// #endregion

// #region flow types
type Props = {
  children: React.ReactNode,

  ...any,
};
// #endregion

const Jumbotron = ({ children }: Props) => {
  return <div className="jumbotron">{children}</div>;
};

// #region statics
Jumbotron.displayName = 'Jumbotron';
// #endregion

export default Jumbotron;
