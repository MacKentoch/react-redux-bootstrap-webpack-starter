import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PageNotFound from '../index';

describe('PageNotFound page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
