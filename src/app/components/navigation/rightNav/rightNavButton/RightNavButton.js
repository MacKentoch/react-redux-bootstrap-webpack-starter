import React, {
  Component,
  PropTypes
}                     from 'react';
import { Link }       from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';

class RightNavButton extends Component {
  constructor(props) {
    super(props);
    this.handleRightNavItemClick = this.handleRightNavItemClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { link, label } = this.props;
    return (
      <li>
        <Link
          to={link}
          onClick={this.handleRightNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }

  handleRightNavItemClick(event) {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  }
}

RightNavButton.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  viewName: PropTypes.string,
  onClick: PropTypes.func
};

export default RightNavButton;
