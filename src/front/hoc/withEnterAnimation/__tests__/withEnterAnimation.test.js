// @flow

import React from 'react';
import { shallow } from 'enzyme';
import withEnterAnimation from '../withEnterAnimation';

describe('withEnterAnimation HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;
    const WrappedComponent = withEnterAnimation()(DummyComponent);

    const component = shallow(<WrappedComponent />);
    expect(component).toMatchSnapshot();
  });
});
