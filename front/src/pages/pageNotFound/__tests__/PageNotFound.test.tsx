import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import PageNotFound from '../index';

const middlewares: Array<any> = [];
const mockStore = configureStore(middlewares);

describe('PageNotFound page', () => {
  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <MemoryRouter>
            <PageNotFound />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
