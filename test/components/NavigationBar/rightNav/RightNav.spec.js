import React              from 'react';
import {
  shallow
}                         from 'enzyme';
import chai, {expect}     from 'chai';
import dirtyChai          from 'dirty-chai';
import RightNav           from '../../../../src/app/components/navigation/rightNav/RightNav';

chai.use(dirtyChai);

const rightLinksMock = [
  {
    label:      'a right Link',
    link:       'link1',
    view:       'fake',
    isRouteBtn: false
  },
  {
    label:      'another right Link',
    link:       'link2',
    view:       'fake2',
    isRouteBtn: true
  }
];

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<RightNav />', () => {
  const props = {
    rightLinks: rightLinksMock,
    onRightNavButtonClick: ()=>{}
  };

  it('should render a RightNav', () => {
    const wrapper = shallow(<RightNav {...props} />);

    expect(wrapper).to.exist();
  });

  describe('child <RightNavButton />', () => {
    it('should exist', () => {
      const wrapper = shallow(<RightNav {...props} />);
      const RightNavButton = wrapper.find('RightNavButton');

      expect(RightNavButton).to.exist();
    });

    it('should be 2 RightNavButton', () => {
      const wrapper = shallow(<RightNav {...props} />);
      const RightNavButton = wrapper.find('RightNavButton');

      expect(RightNavButton.length).to.equal(2);
    });

    describe('first RightNavButton', () => {
      it('should be passed props label:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.first().prop('label')).to.equal(rightLinksMock[0].label);
      });

      it('should be passed props link:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.first().prop('link')).to.equal(rightLinksMock[0].link);
      });

      it('should be passed props viewName:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.first().prop('viewName')).to.equal(rightLinksMock[0].view);
      });

      it('should be passed props onClick:function to be a function', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(typeof RightNavButton.first().prop('onClick')).to.equal('function');
      });
    });

    describe('second RightNavButton', () => {
      const secondRightNavButtonIndex = 1;

      it('should be passed props label:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.at(secondRightNavButtonIndex).prop('label')).to.equal(rightLinksMock[secondRightNavButtonIndex].label);
      });

      it('should be passed props link:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.at(secondRightNavButtonIndex).prop('link')).to.equal(rightLinksMock[secondRightNavButtonIndex].link);
      });

      it('should be passed props viewName:string set to mock value', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(RightNavButton.at(secondRightNavButtonIndex).prop('viewName')).to.equal(rightLinksMock[secondRightNavButtonIndex].view);
      });

      it('should be passed props onClick:function to be a function', () => {
        const wrapper = shallow(<RightNav {...props} />);
        const RightNavButton = wrapper.find('RightNavButton');

        expect(typeof RightNavButton.at(secondRightNavButtonIndex).prop('onClick')).to.equal('function');
      });
    });
  });
});
