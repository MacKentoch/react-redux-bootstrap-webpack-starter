import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import About                from '../../../src/app/views/about/About';

chai.use(dirtyChai);


describe('About VIEW ', () => {
  const props = {
    currentView: 'about',
    enterAbout: () => {},
    leaveAbout: () => {}
  };
  it('should render "About" view', () => {
    const wrapper = shallow(<About {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<h1>About</h1>));
  });

  it('should call enterAbout action', () => {
    const enterAboutAction = sinon.spy(); // called on componentDidMount
    const wrapper = mount(
      <About
        currentView={props.currentView}
        enterAbout={enterAboutAction}
        leaveAbout={()=>{}}
      />
    );
    expect(enterAboutAction).to.have.property('callCount', 1);
  });


});
