// @flow

import React        from 'react';
// import PropTypes    from 'prop-types';

const Humburger = () => {
  return (
    <button
      className="navbar-toggle collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1">
      <span className="sr-only">
        Toggle navigation
      </span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </button>
  );
};

export default Humburger;
