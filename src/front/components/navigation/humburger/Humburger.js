// @flow

// #region imports
import React from 'react';
// #endregion

const Humburger = () => {
  return (
    <button
      className="navbar-toggle collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1"
    >
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
  );
};

// #region statics
Humburger.displayName = 'Humburger';
// #endregion

export default Humburger;
