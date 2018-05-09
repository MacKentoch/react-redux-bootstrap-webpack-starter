// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  link: string,
  label: string,
  viewName: string,
  onClick: (event: SyntheticEvent<>, viewName: string) => any,

  ...any,
};

type State = {
  ...any,
};
// #endregion

class LeftNavButton extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    const { link, label } = this.props;
    return (
      <li>
        <Link to={link} onClick={this.handleLeftNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }
  // #endregion

  handleLeftNavItemClick = (event: SyntheticEvent<>) => {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  };
}

export default LeftNavButton;
