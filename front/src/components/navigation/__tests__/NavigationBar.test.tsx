import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import NavigationBar from '../index';

// jest.mock('../../../services/auth');
Object.defineProperty(window, 'localStorage', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    getItem: () => '',
    setItem: () => '',
  })),
});

const middlewares: Array<any> = [];
const mockStore = configureStore(middlewares);

describe('NavigationBar component', () => {
  // const authMock = require('../../../services/auth');
  // console.log('authMock: ', { authMock });
  // authMock.auth.mockImplementation(() => ({
  //   getToken: () => 'mock_token',
  //   setToken: jest.fn(),
  //   clearToken: jest.fn(),
  //   getUserInfo: () => ({ token: '', email: '' }),
  //   setUserInfo: jest.fn(),
  //   clearUserInfo: jest.fn(),
  //   isAuthenticated: () => true,
  //   isExpiredToken: () => false,
  //   getTokenExpirationDate: () => Date.now(),
  //   clearAllAppStorage: jest.fn(),
  // }));

  Object.defineProperty(window, 'localStorage', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      getItem: () => '',
      setItem: () => '',
    })),
  });

  Object.defineProperty(window, 'sessionStorage', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      getItem: () => '',
      setItem: () => '',
    })),
  });

  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const initialState = {};
    const store = mockStore(initialState);
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

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <MemoryRouter>
            <NavigationBar {...props} />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
