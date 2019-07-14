// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from '../Login';
import { type Props } from '../Login';

describe('Login page', () => {
  it('renders as expected', () => {
    // $FlowIgnore
    const props: Props = {
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
