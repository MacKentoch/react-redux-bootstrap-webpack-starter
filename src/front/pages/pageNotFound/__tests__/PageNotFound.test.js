// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PageNotFound from '../PageNotFound';

describe('PageNotFound page', () => {
  it('renders as expected', () => {
    const props = {
      actions: {},
    };

    const component = shallow(
      <div>
        <MemoryRouter>
          <PageNotFound {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
