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
import { RouteComponentProps } from 'react-router';
import { OwnProps, MappedDispatchToProps, MappedStateToProps } from './index';

// #region types
type Props = {} & RouteComponentProps &
  OwnProps &
  MappedStateToProps &
  MappedDispatchToProps;
// #endregion

function NavigationBar({
  brand,
  navModel: { rightLinks },
  leftNavItemClick,
  rightNavItemClick,
  isAuthenticated,
  history,
  disconnectUser,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // #region navigation bar toggle
  const toggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event && event.preventDefault();
    setIsOpen(!isOpen);
  };
  // #endregion

  // #region handlesNavItemClick event
  const handlesNavItemClick = (link: string = '/') => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event && event.preventDefault();
    history.push(link);
  };
  // #endregion

  // #region disconnect
  const handlesDisconnect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event && event.preventDefault();
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
          {rightLinks.map(({ label, link }, index) => (
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
