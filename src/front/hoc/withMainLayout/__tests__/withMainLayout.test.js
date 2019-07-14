import React from 'react';
import { shallow } from 'enzyme';
import withMainLayout from '../withMainLayout';

describe('withMainLayout HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;
    const WrappedComponent = withMainLayout()(DummyComponent);

    const component = shallow(<WrappedComponent />);
    expect(component).toMatchSnapshot();
  });
});
