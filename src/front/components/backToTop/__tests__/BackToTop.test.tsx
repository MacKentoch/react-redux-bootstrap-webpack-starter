import React from 'react';
import { shallow } from 'enzyme';
import BackToTop from '../BackToTop';

describe('BackToTop component', () => {
  it('renders as expected', () => {
    const props = {
      minScrollY: 10,
      scrollTo: null,
      onScrollDone: jest.fn(),
    };

    const wrapper = shallow(
      <div>
        <BackToTop {...props} />
      </div>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
