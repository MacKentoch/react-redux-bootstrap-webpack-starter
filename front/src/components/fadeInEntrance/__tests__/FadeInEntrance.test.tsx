import React from 'react';
import { render } from '@testing-library/react';
import FadeInEntrance from '../FadeInEntrance';

describe('FadeInEntrance component', () => {
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
    const props = {};

    const { container } = render(
      <FadeInEntrance {...props}>
        <p>a child</p>
      </FadeInEntrance>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
