import React                from 'react';
import { shallow }          from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import BackToTopButton      from '../../../../src/app/components/backToTop/backToTopButton/BackToTopButton';

chai.use(dirtyChai);

const positionMock = 'bottom-left';
const motionStyleMock= {width: '100px'};


describe('<BackToTopButton />', () => {
  const props = {
    position: positionMock,
    motionStyle: motionStyleMock,
    onClick: () => {}
  };

  it('should render a BackToTopButton', () => {
    const wrapper = shallow(<BackToTopButton {...props}/>);

    expect(wrapper).to.exist();
  });

  it('should have UpIcon as default children', () => {
    const wrapper = shallow(<BackToTopButton {...props}/>);
    const UpIcon = wrapper.find('UpIcon');

    expect(UpIcon).to.exist();
    expect(UpIcon.prop('color')).to.exist();
  });

  it('should not have UpIcon as children but a span', () => {
    const extentedProps = {
      ...props,
      children: (<span className="childSpan">a child</span>)
    };
    const wrapper   = shallow(<BackToTopButton {...extentedProps} />);
    const childSpan = wrapper.find('.childSpan');

    expect(childSpan).to.exist();
  });

  it('should trigger onClick function prop on click', () => {
    const event = {};
    const onClickStub = sinon.spy();

    const wrapper = shallow(
      <BackToTopButton
        position={positionMock}
        motionStyle={motionStyleMock}
        onClick={onClickStub}
        />
    );
    const Button = wrapper.find('button');
    Button.simulate('click', event);

    expect(onClickStub.calledOnce).to.equal(true);
  });
});
