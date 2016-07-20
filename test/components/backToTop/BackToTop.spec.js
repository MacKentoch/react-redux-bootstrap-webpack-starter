import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import BackToTop            from '../../../src/app/components/backToTop/BackToTop';

chai.use(dirtyChai);

const minScrollYMock = 10;
const scrollToMock= 'fakeId';


describe('<BackToTop />', () => {
  const props = {
    minScrollY: minScrollYMock,
    scrollTo: scrollToMock
  };

  it('should render a BackToTop', () => {
    const wrapper = shallow(<BackToTop {...props}/>);

    expect(wrapper.node).to.exist();
  });

  // it('should call handleWindowScroll on scroll', () => {
  //   const handleWindowScrollSpy = sinon.spy(BackToTop.prototype, 'handlesOnBackButtonClick');
  //   const wrapper = shallow(
  //       <BackToTop {...props} style={{height: '1000px'}} />
  //   );
  //   wrapper.setState({showBackButton: true});
  //   window.scrollTo(300);
  //   setTimeout(
  //     () => {
  //       expect(handleWindowScrollSpy).to.have.property('callCount', 0);
  //     }, 0
  //   );
  // });
});
