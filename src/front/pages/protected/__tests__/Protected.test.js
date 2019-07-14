// @flow

// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Protected from '../Protected';
// #endregion

describe('Protected page', () => {
  it('renders as expected', () => {
    const props = {
      actions: {},
    };
    const component = shallow(
      <div>
        <MemoryRouter>
          <Protected {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
