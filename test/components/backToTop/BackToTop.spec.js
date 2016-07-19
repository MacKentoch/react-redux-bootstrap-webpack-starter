import React                from 'react';
import { shallow }          from 'enzyme';
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
    // console.log('wrapper.node :', wrapper.node.props.children);

    expect(wrapper.node).to.exist();
  });

  // it('should scrollTo on click', () => {
  //   // sinon.spy(BackToTop.prototype, 'handlesOnBackButtonClick');
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<BackToTop {...props} />);
  //   const BackToTopButton = wrapper.find('BackToTopButton');
  //
  //   BackToTopButton.simulate('click');
  //
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });


  // it('should set BackToTopButton: x position to 0', () => {
  //   const wrapper = shallow(<BackToTop {...props}/>);
  //   wrapper.setState({showBackButton: true});
  //   const BackToTopButton = wrapper.find('.bottom-right');
  //
  //   console.log('BackToTopButton: ', BackToTopButton);
  //   expect(BackToTopButton.props().style.transform).to.equal('translate3d(0,0,0)');
  // });
});
