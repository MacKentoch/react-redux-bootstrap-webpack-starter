import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router';
import MainLayout from '../index';

// NOTE: we mock Navigation component (we are not testing this one) so we won't need redux provider for MainLayout test anymore
jest.mock('../../../components/navigation');
jest.mock('../../../components/backToTop/BackToTop');
jest.mock('../../../services/sw/registerServiceWorker');

describe('MainLayout component', () => {
  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);

    jest.restoreAllMocks();
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it.only('renders as expected', () => {
    const NavigationBar = require('../../../components/navigation');
    // Redux connect (shoudl return React component) is "default exported".
    // IMPORTANT: here we mock the return value of connect to mock NavigationBar component:
    NavigationBar.default.mockReturnValueOnce(() => <span>navbar</span>);

    const BackToTop = require('../../../components/backToTop/BackToTop');
    BackToTop.default.mockImplementationOnce(() => (
      <span>backtotopbutton</span>
    ));

    const { container } = render(
      <ThemeProvider theme={{}}>
        <MemoryRouter>
          <MainLayout>
            <p>children here</p>
          </MainLayout>
        </MemoryRouter>
      </ThemeProvider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
