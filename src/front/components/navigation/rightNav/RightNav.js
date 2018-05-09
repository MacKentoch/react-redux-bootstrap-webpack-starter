// @flow

// #region imports
import React from 'react';
import RightNavButton from './rightNavButton/RightNavButton';
// #endregion

// #region flow types
export type RightLink = {
  link: string,
  label: string,
  viewName: string,
};

export type OnRightNavButtonClick = (
  event: SyntheticEvent<>,
  viewName: string,
) => any;

type Props = {
  rightLinks: Array<RightLink>,
  onRightNavButtonClick: OnRightNavButtonClick,

  ...any,
};
// #endregion

const RightNav = ({ rightLinks, onRightNavButtonClick }: Props) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      {rightLinks.map(({ link, label, viewName }, index) => {
        return (
          <RightNavButton
            key={index}
            link={link}
            label={label}
            viewName={viewName}
            onClick={onRightNavButtonClick}
          />
        );
      })}
    </ul>
  );
};

// #region statics
RightNav.defaultProps = { rightLinks: [] };
RightNav.displayName = 'RightNav';
// #endregion

export default RightNav;
