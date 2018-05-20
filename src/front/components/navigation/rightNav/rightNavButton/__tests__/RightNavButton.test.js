// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import RightNavButton from '../RightNavButton';
// #endregion

// #region flow types
type Props = {
  link: string,
  label: string,
  viewName: string,
  onClick: (event: SyntheticEvent<>, viewName: string) => any,
};
// #endregion

describe('RightNavButton component', () => {
  it('renders as expected', () => {
    const props: Props = {
      link: '1',
      label: 'view 1',
      viewName: 'view 1',
      onClick: () => {},
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <RightNavButton {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
