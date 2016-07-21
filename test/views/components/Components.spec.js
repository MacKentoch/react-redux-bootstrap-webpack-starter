import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import Components           from '../../../src/app/views/components/Components';

chai.use(dirtyChai);


describe('Components VIEW ', () => {
  const props = {
    currentView: 'components',
    enterComponents: () => {},
    leaveComponents: () => {}
  };
  it('should render "Components" view', () => {
    const wrapper = shallow(<Components {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<h1>Components</h1>));
  });

  it('should call enterComponents action', () => {
    const enterComponentsAction = sinon.spy(); // called on componentDidMount
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Components
        currentView={props.currentView}
        enterComponents={enterComponentsAction}
        leaveComponents={()=>{}}
      />
    );
    /* eslint-enable no-unused-vars */
    expect(enterComponentsAction).to.have.property('callCount', 1);
  });

  it('should call leaveAbout action', () => {
    const leaveComponentsAction = sinon.spy(); // called on componentDidMount
    const wrapper = mount(
      <Components
        currentView={props.currentView}
        enterComponents={()=>{}}
        leaveComponents={leaveComponentsAction}
      />
    );
    wrapper.unmount();
    expect(leaveComponentsAction).to.have.property('callCount', 1);
  });
});
