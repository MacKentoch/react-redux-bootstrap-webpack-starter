import React, {PropTypes} from 'react';
import { Link }           from 'react-router';
import Humburger          from './humburger/Humburger';
import LeftNav            from './leftNav/LeftNav';

class NavigationBar extends React.Component {

  renderRightNavButton() {
    if (this.props.navModel.rightLinks) {
      const rightNavButton = this.props.navModel.rightLinks.map(
        (aLinkBtn, index) => {
          return (
            <li key={index}>
              <Link
                to={aLinkBtn.link}
                onClick={(ev) => this.props.handleRightNavItemClick(ev, aLinkBtn.view)}>
                  {aLinkBtn.label}
              </Link>
            </li>
          );
        }
      );
      return  rightNavButton;
    }
    return null;
  }

  render() {
    const { navModel, handleLeftNavItemClick } = this.props;
    return (
      <nav className="navbar navbar-default">
        <div className="containersCustom">
          <div className="navbar-header">
            {
              <Humburger />
            }
            <a className="navbar-brand">
              {this.props.brand}
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {
                <renderLeftNavButton
                  leftLinks={navModel.leftLinks}
                  onLeftNavButtonClick={handleLeftNavItemClick}
                />
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderRightNavButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  brand:                    PropTypes.string,
  handleLeftNavItemClick:   PropTypes.func,
  handleRightNavItemClick:  PropTypes.func,
  navModel:                 PropTypes.shape({
    leftLinks:  PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link : PropTypes.string.isRequired
      })
    ).isRequired,
    rightLinks:  PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link : PropTypes.string.isRequired
      })
    ).isRequired
  })
};

NavigationBar.defaultProps  = {
  brand  : 'brand'
};

export default NavigationBar;
