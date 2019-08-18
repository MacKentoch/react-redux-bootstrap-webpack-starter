import React from 'react';
import { shallow } from 'enzyme';
import FadeInEntrance from '../FadeInEntrance';

describe('FadeInEntrance component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <FadeInEntrance>
        <p>a child</p>
      </FadeInEntrance>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
