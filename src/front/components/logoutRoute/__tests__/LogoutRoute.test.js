import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import LogoutRoute from '../LogoutRoute';

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
