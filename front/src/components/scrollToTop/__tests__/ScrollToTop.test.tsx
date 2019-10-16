import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop component', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <ScrollToTop>
          <p>a child</p>
        </ScrollToTop>
      </MemoryRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
