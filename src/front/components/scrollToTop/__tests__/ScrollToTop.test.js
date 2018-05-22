// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import ScrollToTop from '../ScrollToTop';
// #endregion

describe('ScrollToTop component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <ScrollToTop>
              <p>a child</p>
            </ScrollToTop>
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
