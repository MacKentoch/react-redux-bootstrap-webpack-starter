import React                from 'react';
import { shallow }          from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import UpIcon               from '../../../../src/app/components/backToTop/backToTopButton/UpIcon';

chai.use(dirtyChai);

describe('<UpIcon />', () => {
  const colorMock = 'black';
  const defaultColor = '#F1F1F1';

  const props = {
    color: colorMock
  };

  it('should render an UpIcon', () => {
    const wrapper = shallow(<UpIcon {...props}/>);

    expect(wrapper.node).to.exist();
    expect(wrapper.find('svg')).to.exist();
  });

  it('should set default fill color', () => {
    const wrapper = shallow(<UpIcon />);

    expect(wrapper.find('svg').prop('fill')).to.equal(defaultColor);
  });

  it('should set fill color from prop value', () => {
    const wrapper = shallow(<UpIcon {...props}/>);

    expect(wrapper.find('svg').prop('fill')).to.equal(colorMock);
  });
});
