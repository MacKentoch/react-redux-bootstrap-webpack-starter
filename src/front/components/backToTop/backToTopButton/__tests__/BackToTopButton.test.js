// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import BackToTopButton from '../BackToTopButton';
// #endregion

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const props = {
      position: 'bottom-right',
      onClick: () => {},
      motionStyle: {},
    };
    const aChild = <p>button</p>;

    const component = renderer
      .create(
        <div id="appContainer">
          <BackToTopButton {...props}>{aChild}</BackToTopButton>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
