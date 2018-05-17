// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import Humburger from '../Humburger';
// #endregion

describe('Humburger component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <Humburger />
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
