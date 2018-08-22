// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import withEnterAnimation from '../withEnterAnimation';
// #endregion

describe('withEnterAnimation HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;

    const component = renderer
      .create(withEnterAnimation()(DummyComponent))
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
