// @flow

// #region imports
import React from 'react';
import Humburger from './humburger/Humburger';
import LeftNav from './leftNav/LeftNav';
import RightNav from './rightNav/RightNav';
import { type LeftLink, type OnLeftNavButtonClick } from './leftNav/LeftNav';
import {
  type RightLink,
  type OnRightNavButtonClick,
} from './rightNav/RightNav';
// #endregion

// #region flow types
type Props = {
  brand: string,

  handleLeftNavItemClick: OnLeftNavButtonClick,
  handleRightNavItemClick: OnRightNavButtonClick,

  navModel: {
    leftLinks: Array<LeftLink>,
    rightLinks: Array<RightLink>,
  },

  ...any,
};
// #endregion

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
}: Props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="containersCustom">
        <div className="navbar-header">
          {<Humburger />}
          <a className="navbar-brand">{brand}</a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            {
              <LeftNav
                leftLinks={navModel.leftLinks}
                onLeftNavButtonClick={handleLeftNavItemClick}
              />
            }
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {
              <RightNav
                rightLinks={navModel.rightLinks}
                onRightNavButtonClick={handleRightNavItemClick}
              />
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

// #region statics
NavigationBar.defaultProps = { brand: 'brand' };

NavigationBar.displayName = 'NavigationBar';
// #endregion

export default NavigationBar;
