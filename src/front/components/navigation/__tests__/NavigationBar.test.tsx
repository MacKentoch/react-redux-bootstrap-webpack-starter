import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import NavigationBar from '../NavigationBar';

describe('NavigationBar component', () => {
  it('renders as expected', () => {
    const props = {
      brand: 'test',
      navModel: {
        leftLinks: [
          {
            link: '/',
            label: 'home',
          },
        ],
        rightLinks: [
          {
            link: '/',
            label: 'home',
          },
        ],
      },
      token: '',
      isAuthenticated: true,
      leftNavItemClick: jest.fn(),
      rightNavItemClick: jest.fn(),
      disconnectUser: jest.fn(),
      checkUserIsConnected: jest.fn(),
      fetchUserInfoDataIfNeeded: jest.fn(),
      logUserIfNeeded: jest.fn(),
    };

    const component = shallow(
      <div>
        <MemoryRouter>
          <NavigationBar {...props} />
        </MemoryRouter>
      </div>,
    );

    expect(component).toMatchSnapshot();
  });
});
