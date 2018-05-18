// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import LeftNav from '../LeftNav';
import { type LeftLink, type OnLeftNavButtonClick } from '../LeftNav';
// #endregion

// #region flow types
type Props = {
  leftLinks?: Array<LeftLink>,
  onLeftNavButtonClick?: OnLeftNavButtonClick,
};
// #endregion

describe('LeftNav component', () => {
  it('renders as expected', () => {
    const props: Props = {
      leftLinks: [
        { link: '1', label: 'view 1', viewName: 'view 1' },
        { link: '2', label: 'view 2', viewName: 'view 2' },
      ],
      onLeftNavButtonClick: () => {},
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <LeftNav {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
