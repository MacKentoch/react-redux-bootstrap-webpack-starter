import React              from 'react';
import {
  shallow
}                         from 'enzyme';
import chai, {expect}     from 'chai';
import sinon              from 'sinon';
import dirtyChai          from 'dirty-chai';
import LeftNavButton      from '../../../../../src/app/components/navigation/leftNav/leftNavButton/LeftNavButton';

chai.use(dirtyChai);

const linkMock = 'link';
const labelMock = 'label';
const viewNameMock = 'view name';

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<LeftNavButton />', () => {
  const props = {
    link: linkMock,
    label: labelMock,
    viewName: viewNameMock
  };

  it('should render a LeftNavButton', () => {
    const wrapper = shallow(<LeftNavButton {...props} />);

    expect(wrapper).to.exist();
  });

  describe('child <Link />', () => {
    it('should exist', () => {
      const wrapper = shallow(<LeftNavButton {...props} />);
      const Link = wrapper.find('Link');

      expect(Link).to.exist();
    });

    it('should trigger a navigation on left link click', () => {
      const event = {};
      const onClickStub = sinon.spy();

      const wrapper = shallow(
        <LeftNavButton
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
