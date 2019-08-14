import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Protected from '../Protected';

describe('Protected page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <div>
        <MemoryRouter>
          <Route path="/protected"  component={Protected} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
