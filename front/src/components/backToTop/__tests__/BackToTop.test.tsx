import React from 'react';
import { shallow } from 'enzyme';
import BackToTop from '../BackToTop';

describe('BackToTop component', () => {
  it('renders as expected', () => {
    const props = {
      minScrollY: 10,
      onScrollDone: jest.fn(),
    };

    const wrapper = shallow(<BackToTop {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
