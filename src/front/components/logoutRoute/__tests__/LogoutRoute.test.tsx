import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LogoutRoute from '../index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const props = {
      disconnectUser: jest.fn(),
    };

    const component = shallow(
      <div>
        <MemoryRouter initialEntries={['/']}>
          <LogoutRoute {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
