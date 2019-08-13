// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import About from '../About';

describe('About page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/about" component={About} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
