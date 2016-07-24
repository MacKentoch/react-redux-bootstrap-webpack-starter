import React                from 'react';
import { mount }            from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import DevTools             from '../../../src/app/redux/devTools/DevTools.jsx';

chai.use(dirtyChai);


describe('<DevTools />', () => {
  it('should render DevTools', () => {
    const wrapper = mount(<DevTools />);
    expect(wrapper.node).to.exist();
  });
});
