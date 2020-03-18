import React from 'react';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import PageNotFound from '../index';

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
    const { container } = render(
      <ThemeProvider theme={{}}>
        <MemoryRouter>
          <PageNotFound />
        </MemoryRouter>
      </ThemeProvider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
