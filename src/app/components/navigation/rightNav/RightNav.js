import React, { PropTypes } from 'react';
import RightNavButton       from './rightNavButton/RightNavButton';

const RightNav = ({ rightLinks, onRightNavButtonClick }) => {
  return (
    <ul className="nav navbar-nav navbar-right">
      {
        rightLinks.map(
          (aLinkBtn, index) => {
            return (
              <RightNavButton
                key={index}
                link={aLinkBtn.link}
                label={aLinkBtn.label}
                viewName={aLinkBtn.view}
                onClick={onRightNavButtonClick}
              />
            );
          }
        )
      }
    </ul>
  );
};

RightNav.propTypes = {
  rightLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
      viewName: PropTypes.string
    })
  ),
  onRightNavButtonClick: PropTypes.func
};

export default RightNav;
