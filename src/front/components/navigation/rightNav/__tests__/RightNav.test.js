// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import RightNav from '../RightNav';
import { type RightLink, type OnRightNavButtonClick } from '../RightNav';
// #endregion

// #region flow types
type Props = {
  rightLinks?: Array<RightLink>,
  onRightNavButtonClick?: OnRightNavButtonClick,
};
// #endregion

describe('RightNav component', () => {
  it('renders as expected', () => {
    const props: Props = {
      rightLinks: [
        { link: '1', label: 'view 1', viewName: 'view 1' },
        { link: '2', label: 'view 2', viewName: 'view 2' },
      ],
      onRightNavButtonClick: () => {},
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <RightNav {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
