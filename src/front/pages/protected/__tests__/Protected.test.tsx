import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import Protected from '../index'; // import connected component to avoid router props not defined errors

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

describe('Protected page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <Protected />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
