import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import Home                 from '../../../src/app/views/home/Home';

chai.use(dirtyChai);


describe('Home VIEW ', () => {
  const props = {
    currentView: 'home',
    enterHome: () => {},
    leaveHome: () => {}
  };
  it('should render "Home" view', () => {
    const wrapper = shallow(<Home {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.find('Jumbotron').length).to.equal(1);
  });

  it('should call enterHome action', () => {
    const enterHomeAction = sinon.spy(); // called on componentDidMount
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Home
        currentView={props.currentView}
        enterHome={enterHomeAction}
        leaveHome={()=>{}}
      />
    );
    /* eslint-enable no-unused-vars */
    expect(enterHomeAction).to.have.property('callCount', 1);
  });

  it('should call leaveAbout action', () => {
    const leaveHomeAction = sinon.spy(); // called on componentDidMount
    const wrapper = mount(
      <Home
        currentView={props.currentView}
        enterHome={()=>{}}
        leaveHome={leaveHomeAction}
      />
    );
    wrapper.unmount();
    expect(leaveHomeAction).to.have.property('callCount', 1);
  });
});
