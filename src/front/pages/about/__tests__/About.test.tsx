import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import About from '../index';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

describe('About page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/about" component={About} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
