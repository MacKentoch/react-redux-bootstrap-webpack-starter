import React                from 'react';
import chai, {expect}       from 'chai';
import {shallow}            from 'enzyme';
import PageNotFound         from '../../../src/app/views/pageNotFound/PageNotFound';
import dirtyChai            from 'dirty-chai';

chai.use(dirtyChai);

describe('PageNotFound (PageNotFound view) ', () => {
  it('should render "PageNotFound" view', () => {
    const wrapper = shallow(<PageNotFound />);

    expect(wrapper.node).to.exist();
    expect(wrapper.containsMatchingElement(<h1>Sorry this page does not exists...</h1>));
  });
});
