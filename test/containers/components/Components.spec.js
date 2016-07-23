import React                from 'react';
import {expect}             from 'chai';
import {shallow}            from 'enzyme';
import configureMockStore   from 'redux-mock-store';
import thunk                from 'redux-thunk';
import ComponentsConnected  from '../../../src/app/containers/components/Components';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  views: {
    currentView: 'home'
  }
};

let store;
let wrapper;
describe('ComponentsConnected (Home container) ', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<ComponentsConnected store={store} />).shallow();
  });

  it('should render <ComponentsConnected />', () => {
    expect(wrapper.containsMatchingElement(<h1>Components</h1>));
  });
});
