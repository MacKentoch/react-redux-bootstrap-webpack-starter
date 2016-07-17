import React, { PropTypes } from 'react';
import LeftNavButton        from './leftNavButton/LeftNavButton';

const LeftNav = ({ leftLinks, onLeftNavButtonClick }) => {
  return (
    <ul className="nav navbar-nav">
      {
        leftLinks.map(
          (aLinkBtn, index) => {
            return (
              <LeftNavButton
                key={index}
                link={aLinkBtn.link}
                label={aLinkBtn.label}
                viewName={aLinkBtn.view}
                onClick={onLeftNavButtonClick}
              />
            );
          }
        )
      }
    </ul>
  );
};

LeftNav.propTypes = {
  leftLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
      viewName: PropTypes.string
    })
  ),
  onLeftNavButtonClick: PropTypes.func
};

export default LeftNav;
