import React, {
  Component,
  PropTypes
}                     from 'react';
import { Link }       from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

class LeftNavButton extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

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
  link: PropTypes.string,
  label: PropTypes.string,
  viewName: PropTypes.string,
  onClick: PropTypes.func
};

export default LeftNavButton;
