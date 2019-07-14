
import React from 'react';
import { mount } from 'enzyme';
import BackToTop from '../BackToTop';


describe('BackToTop component', () => {
  it('renders as expected', () => {
    const props = {
      minScrollY: 10,
      scrollTo: null,
      onScrollDone: () => {},
    };

    const wrapper = mount(
      <div>
        <BackToTop {...props} />
      </div>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
