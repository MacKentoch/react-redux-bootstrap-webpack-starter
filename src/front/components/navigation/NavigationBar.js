// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
type Props = {
  // withRouter HOC:
  match: Match,
  location: Location,
  history: RouterHistory,

  // parent props:
  brand: string,
  handleLeftNavItemClick: OnLeftNavButtonClick,
  handleRightNavItemClick: OnRightNavButtonClick,
  navModel: {
    leftLinks: Array<LeftLink>,
    rightLinks: Array<RightLink>,
  },

  ...any,
} & AuthContextProps;

type State = {
  isOpen: boolean,
  ...any,
};
// #endregion

class NavigationBar extends PureComponent<Props, State> {
  static defaultProps = {
    brand: 'brand',
  };

  state = {
    isOpen: false,
  };

  // #region lifecycle
  render() {
    const {
      brand,
      navModel: { rightLinks },
      isAuthenticated,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{brand}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {rightLinks.map(({ label, link, viewName }, index) => (
              <NavItem key={`${index}`}>
                <NavLink href="#" onClick={this.handlesNavItemClick(link)}>
                  {label}
                </NavLink>
              </NavItem>
            ))}
            {isAuthenticated && (
              <NavItem>
                <NavLink href="#" onClick={this.handlesDisconnect}>
                  Disconnect
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
  // #endregion

  // #region navigation bar toggle
  toggle = (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    this.setState((isOpen: prevIsOpened) => ({ isOpen: !prevIsOpened }));
  };
  // #endregion

  // #region handlesNavItemClick event
  handlesNavItemClick = (link: string = '/') => (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history } = this.props;
    history.push(link);
  };
  // #endregion

  // #region disconnect
  handlesDisconnect = (evt: SyntheticEvent<>) => {
    if (evt) {
      evt.preventDefault();
    }
    const { history, disconnectUser } = this.props;

    disconnectUser();
    history.push('/');
  };
  // #endregion
}

export default withRouter(NavigationBar);
