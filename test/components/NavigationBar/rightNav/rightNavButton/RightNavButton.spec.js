import React              from 'react';
import {
  shallow
}                         from 'enzyme';
import chai, {expect}     from 'chai';
import sinon              from 'sinon';
import dirtyChai          from 'dirty-chai';
import RightNavButton      from '../../../../../src/app/components/navigation/rightNav/rightNavButton/RightNavButton';

chai.use(dirtyChai);

const linkMock = 'link';
const labelMock = 'label';
const viewNameMock = 'view name';

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<RightNavButton />', () => {
  const props = {
    link: linkMock,
    label: labelMock,
    viewName: viewNameMock
  };

  it('should render a RightNavButton', () => {
    const wrapper = shallow(<RightNavButton {...props} />);

    expect(wrapper).to.exist();
  });

  describe('child <Link />', () => {
    it('should exist', () => {
      const wrapper = shallow(<RightNavButton {...props} />);
      const Link = wrapper.find('Link');

      expect(Link).to.exist();
    });

    it('should trigger a navigation on left link click', () => {
      const event = {};
      const onClickStub = sinon.spy();

      const wrapper = shallow(
        <RightNavButton
          {...props}
          onClick={onClickStub}
          />
      );
      const Link = wrapper.find('Link');
      Link.simulate('click', event);

      expect(onClickStub.calledOnce).to.equal(true);
    });
  });
});
