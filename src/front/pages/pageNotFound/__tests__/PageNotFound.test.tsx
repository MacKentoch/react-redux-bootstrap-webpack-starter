import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import PageNotFound from '../PageNotFound';

describe('PageNotFound page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <Route path="/pageNotFound" component={PageNotFound} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
