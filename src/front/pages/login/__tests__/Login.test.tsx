import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login page', () => {
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

    const component = shallow(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
