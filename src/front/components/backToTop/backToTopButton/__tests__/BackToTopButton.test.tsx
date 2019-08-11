import React from 'react';
import { shallow } from 'enzyme';
import BackToTopButton, { BackButtonPosition } from '../BackToTopButton';

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const position: BackButtonPosition = 'bottom-left';
    const props = {
      position,
      onClick: () => {},
      motionStyle: {},
    };

    const component = shallow(
      <div>
        <BackToTopButton {...props}>
          <p>a child</p>
        </BackToTopButton>
      </div>,
    );

    expect(component).toMatchSnapshot();
  });
});
