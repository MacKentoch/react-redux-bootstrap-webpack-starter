import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Login from '../Login';

describe('Login page', () => {
  it('renders as expected', () => {
    const props = {
      isFetching: false,
      isLogging: false,
      isAuthenticated: false,
      logUserIfNeeded: jest.fn(),
      disconnectUser: jest.fn(),
      checkUserIsConnected: jest.fn(),
      fetchUserInfoDataIfNeeded: jest.fn(),
    };

    const component = shallow(
      <div>
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
