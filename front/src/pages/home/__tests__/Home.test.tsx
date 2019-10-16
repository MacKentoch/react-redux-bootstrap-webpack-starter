import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Home from '../index';

describe('Home page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <Route path="/" component={Home} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
