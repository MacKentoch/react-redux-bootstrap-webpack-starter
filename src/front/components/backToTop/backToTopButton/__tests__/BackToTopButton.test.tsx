import React from 'react';
import { shallow } from 'enzyme';
import BackToTopButton from '../BackToTopButton';

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const props = {
      position: 'bottom-left',
      onClick: () => {},
      motionStyle: {},
    };

    const component = shallow(
      <div>
        <BackToTopButton {...props} />
      </div>,
    );

    expect(component).toMatchSnapshot();
  });
});
