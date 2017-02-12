import React, {
  PureComponent,
  PropTypes
}                     from 'react';
import { Link }       from 'react-router';

class LeftNavButton extends PureComponent {
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

LeftNavButton.propTypes = {
  link:     PropTypes.string,
  label:    PropTypes.string,
  viewName: PropTypes.string,
  onClick:  PropTypes.func
};

export default LeftNavButton;
