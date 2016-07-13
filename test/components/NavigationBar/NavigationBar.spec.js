import React              from 'react';
import { shallow, mount, render } from 'enzyme';
import chai, {expect} from 'chai';
import dirtyChai      from 'dirty-chai';
import { NavigationBar }  from '../../../src/app/components';


const navModel = {
  brand:      'React Redux Bootstrap Starter',
  leftLinks:  [],
  rightLinks: [
    {
      label:      'Home',
      link:       '/',
      view:       'home',
      isRouteBtn: true
    },
    {
      label:      'About',
      link:       '/about',
      view:       'about',
      isRouteBtn: true
    }
  ]
};

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<NavigationBar />', () => {
  const props = {
    brand: 'test',
    handleLeftNavItemClick: ()=>{},
    handleRightNavItemClick: ()=>{},
    navModel};

  it('should render a NavigationBar', () => {
    const wrapper = mount(<NavigationBar {...props} />);
    expect(true).to.be.true();
  });
});
