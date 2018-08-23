// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import withMainLayout from '../withMainLayout';
// #endregion

describe('withMainLayout HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;

    const component = renderer
      .create(withMainLayout()(DummyComponent))
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
