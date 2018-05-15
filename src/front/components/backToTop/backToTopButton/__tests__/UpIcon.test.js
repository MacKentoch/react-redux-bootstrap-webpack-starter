// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import UpIcon from '../UpIcon';
// #endregion

describe('UpIcon component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <UpIcon />
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
