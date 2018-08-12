// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import NavigationBar from '../NavigationBar';
// #endregion

describe('NavigationBar component', () => {
  it('renders as expected', () => {
    const props = {
      brand: 'test',
      handleLeftNavItemClick: () => {},
      handleRightNavItemClick: () => {},
      navModel: {
        leftLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
        rightLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
      },
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <NavigationBar {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
