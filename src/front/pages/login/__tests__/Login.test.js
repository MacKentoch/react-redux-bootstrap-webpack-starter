// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import Login from '../Login';
import { type Props } from '../Login';
// #endregion

describe('Login page', () => {
  it('renders as expected', () => {
    const props: Props = {
      isFetching: false,
      isLogging: false,
      isAuthenticated: false,
      logUserIfNeeded: () => {},
      disconnectUser: () => {},
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <Login {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
