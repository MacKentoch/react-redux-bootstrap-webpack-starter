// @flow

// #region imports
import React from 'react';
import LeftNavButton from './leftNavButton/LeftNavButton';
// #endregion

// #region flow types
export type LeftLink = {
  link: string,
  label: string,
  viewName: string,
};

export type OnLeftNavButtonClick = (
  event: SyntheticEvent<>,
  viewName: string,
) => any;

type Props = {
  leftLinks: Array<LeftLink>,
  onLeftNavButtonClick: OnLeftNavButtonClick,

  ...any,
};
// #endregion

const LeftNav = ({ leftLinks, onLeftNavButtonClick }: Props) => {
  return (
    <ul className="nav navbar-nav">
      {leftLinks.map(({ link, label, viewName }, index) => {
        return (
          <LeftNavButton
            key={index}
            link={link}
            label={label}
            viewName={viewName}
            onClick={onLeftNavButtonClick}
          />
        );
      })}
    </ul>
  );
};

// #region statics
LeftNav.defaultProps = { leftLinks: [] };
LeftNav.displayName = 'LeftNav';
// #endregion

export default LeftNav;
