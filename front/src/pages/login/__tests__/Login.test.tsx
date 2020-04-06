import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import fetchMiddleware from '../../../redux/middleware/fetchMiddleware';
import Login from '../index';

const middlewares = [thunk, fetchMiddleware];
const mockStore = configureStore(middlewares);

describe('Login page', () => {
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
      userAuth: {
        isFetching: false,
        isLogging: false,
        id: '',
        login: '',
        firstname: '',
        lastname: '',
        token: '',
        isAuthenticated: false,
      },
    };
    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
