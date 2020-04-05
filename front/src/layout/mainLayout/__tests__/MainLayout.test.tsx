import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router';
import MainLayout from '../index';

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

  it('renders as expected', () => {
    const NavigationBar = require('../../../components/navigation');
    const BackToTop = require('../../../components/backToTop/BackToTop');
    // React component is default exported:
    NavigationBar.default.mockImplementationOnce(() => <span>navbar</span>);
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
