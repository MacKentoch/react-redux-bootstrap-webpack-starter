import React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import MainLayout from '../index';

describe('MainLayout', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <MainLayout>
          <p>a child</p>
        </MainLayout>
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
