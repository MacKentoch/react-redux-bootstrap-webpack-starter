// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import Jumbotron from '../Jumbotron';
// #endregion

describe('Jumbotron component', () => {
  it('renders as expected', () => {
    const aChild = <p>a child</p>;
    const component = renderer
      .create(
        <div>
          <Jumbotron>{aChild}</Jumbotron>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
