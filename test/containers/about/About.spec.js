import React                from 'react';
import {expect}             from 'chai';
import {shallow}            from 'enzyme';
import configureMockStore   from 'redux-mock-store';
import thunk                from 'redux-thunk';
import AboutConnected       from '../../../src/app/containers/about/About';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  views: {
    currentView: 'about'
  }
};

let store;
let wrapper;
describe('AboutConnected (About container) ', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    wrapper = shallow(<AboutConnected store={store} />).shallow();
  });

  it('should render container', () => {
    expect(wrapper.containsMatchingElement(<h1>About</h1>));
  });

  // it('should set currentView props', () => {
  //   console.log('----- About props: ', wrapper.find('About'));
  //   expect(wrapper.find('About').prop('currentView')).to.equal(storeStateMock.views.currentView);
  // });
});
