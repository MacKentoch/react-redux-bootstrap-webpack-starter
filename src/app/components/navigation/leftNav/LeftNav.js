import React, { PropTypes } from 'react';
import leftNavButton        from './leftNavButton/leftNavButton';

const LeftNav = ({ leftLinks, onLeftNavButtonClick }) => {
  return (
    <ul className="nav navbar-nav">
      {
        leftLinks.map(
          (aLinkBtn, index) => {
            return (
              <leftNavButton
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
