import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router, Switch } from 'react-router';
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

const Home = (p: any) => {
  p.history.push('/protected');
  return <p>home</p>;
};
// #enregion

describe('PrivateRoute component', () => {
  it('renders as expected', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const props = {};
    const Child = () => <p>private</p>;

    const component = shallow(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivateRoute {...props} path="/protected">
                <Child />
              </PrivateRoute>
              <Route exact path="/login" component={() => <p>login</p>} />
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('redirects to login when not authenticated', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const props = {};
    const PrivatePage = () => <p id="private">private</p>;
    const LoginPage = () => <p id="login">login</p>;

    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Home} />
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
    );

    expect(wrapper.find('#login')).toHaveLength(1);
  });
});
