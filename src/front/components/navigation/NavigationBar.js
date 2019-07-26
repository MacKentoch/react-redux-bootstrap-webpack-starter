import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type UserAuthActions } from '../../redux/modules/userAuth';
import { type Link } from '../../config/navigation';

// #region flow types
type Props = {
  // withRouter HOC:
  match: Match,
  location: Location,
  history: RouterHistory,

  // redux
  token: string | null,
  isAuthenticated: boolean,

  // parent props:
  brand: string,
  handleLeftNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  handleRightNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  navModel: {
    leftLinks: Array<Link>,
    rightLinks: Array<Link>,
  },

  ...any,
} & UserAuthActions;
// #endregion

function NavigationBar({
  brand,
  navModel: { rightLinks },
  isAuthenticated,
  history,
  disconnectUser,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // #region navigation bar toggle
  const toggle = (evt: SyntheticEvent<>) => {
    evt && evt.preventDefault();
    setIsOpen(!isOpen);
  };
  // #endregion

  // #region handlesNavItemClick event
  const handlesNavItemClick = (link: string = '/') => (
    evt: SyntheticEvent<>,
  ) => {
    evt && evt.preventDefault();
    history.push(link);
  };
  // #endregion

  // #region disconnect
  const handlesDisconnect = (evt: SyntheticEvent<>) => {
    evt && evt.preventDefault();
    disconnectUser();
    history.push('/');
  };
  // #endregion

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{brand}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {rightLinks.map(({ label, link, viewName }, index) => (
            <NavItem key={`${index}`}>
              <NavLink href="#" onClick={handlesNavItemClick(link)}>
                {label}
              </NavLink>
            </NavItem>
          ))}
          {isAuthenticated && (
            <NavItem>
              <NavLink href="#" onClick={handlesDisconnect}>
                Disconnect
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
