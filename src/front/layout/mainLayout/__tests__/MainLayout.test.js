import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
