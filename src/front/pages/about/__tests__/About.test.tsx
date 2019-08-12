// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import About from '../About';

describe('About page', () => {
  it('renders as expected', () => {
    const props = {
      actions: {},
    };
    const component = shallow(
      <div>
        <MemoryRouter>
          <About {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
