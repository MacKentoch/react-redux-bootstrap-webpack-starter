import React from 'react';
import { render } from '@testing-library/react';
import { Router, Switch, useHistory } from 'react-router';
import { Route } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import PrivateRoute from '../index';

// #region constants
const history = createHashHistory();
const middlewares: Array<any> = [];
const mockStore = configureStore(middlewares);
// #endregion

describe('PrivateRoute component', () => {
  let rootElement: any = null;

  const HomePage = () => {
    const history = useHistory();
    history.push('/protected');
    return <p>Home page</p>;
  };

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
    const props = {};

    const LoginPage = () => <p>Login page</p>;
    const ChildPage = () => <p>private page</p>;

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <PrivateRoute {...props} path="/protected">
                <ChildPage />
              </PrivateRoute>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('redirects to login when not authenticated', async () => {
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
    const props = {};
    const PrivatePage = () => <p data-testid="private">private page</p>;
    const LoginPage = () => <p data-testid="login">login page</p>;

    const { findByTestId } = render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <PrivateRoute {...props} path="/protected">
                <PrivatePage />
              </PrivateRoute>
              <Route exact path="/login">
                <LoginPage />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );

    const loginPageContainer = await findByTestId('private');
    expect(loginPageContainer.textContent).toBe('private page');
  });
});
