import React              from 'react';
import {
  shallow
}                         from 'enzyme';
import chai, {expect}     from 'chai';
import dirtyChai          from 'dirty-chai';
import Humburger          from '../../../../src/app/components/navigation/humburger/Humburger';

chai.use(dirtyChai);


describe('<Humburger />', () => {
  it('should render an Humburger', () => {
    const wrapper = shallow(<Humburger />);

    expect(wrapper).to.exist();
  });

  it('should contains a button with "navbar-toggle" class', () => {
    const wrapper = shallow(<Humburger />);
    const button = wrapper.find('button');

    expect(button.hasClass('navbar-toggle')).to.equal(true);
  });

  it('should contains "<span className="icon-bar"></span>"', () => {
    const wrapper = shallow(<Humburger />);
    expect(wrapper.contains(<span className="icon-bar"></span>)).to.equal(true);
  });
});
