import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import NavigationBar from '../index'; // import connected component to avoid router props not defined errors

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

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
      <MemoryRouter>
        <NavigationBar {...props} />
      </MemoryRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
