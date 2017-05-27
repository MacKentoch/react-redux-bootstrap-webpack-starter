// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import { Link }       from 'react-router';

class LeftNavButton extends PureComponent {
  static propTypes = {
    link:     PropTypes.string,
    label:    PropTypes.string,
    viewName: PropTypes.string,
    onClick:  PropTypes.func
  };

  render() {
    const { link, label } = this.props;
    return (
      <li>
        <Link
          to={link}
          onClick={this.handleLeftNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }

  handleLeftNavItemClick = (event) => {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  }
}

export default LeftNavButton;
