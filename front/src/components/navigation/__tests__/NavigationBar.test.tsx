import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import NavigationBar from '../index';

const middlewares: Array<any> = [];
const mockStore = configureStore(middlewares);

describe('NavigationBar component', () => {
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
    const initialState = {
      userAuth: { token: 'FAKE_TOKEN' },
    };
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
