import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import LogoutRoute from '../index';

const middlewares: Array<any> = [];
const mockStore = configureStore(middlewares);

describe('LogoutRoute component', () => {
  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', async () => {
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
    const { container } = await render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <MemoryRouter>
            <Switch>
              <Route path="*">
                <span>anywhere</span>
              </Route>
              <Route path="/login">
                <span> login page</span>
              </Route>
              <LogoutRoute />
            </Switch>
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
