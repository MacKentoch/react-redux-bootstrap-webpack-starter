import React          from 'react';
import {
  shallow
}                     from 'enzyme';
import chai, {expect} from 'chai';
import dirtyChai      from 'dirty-chai';

import { Jumbotron }  from '../../../src/app/components';

// avoid to eslint-disable for chai no-unsued-expressions
chai.use(dirtyChai);

describe('<Jumbotron />', () => {
  const props = {children: <h1>test</h1>};

  it('should render a children', () => {
    const wrapper = shallow(<Jumbotron {...props} />);
    expect(wrapper.containsMatchingElement(<h1>test</h1>)).to.equal(true);
  });
});
