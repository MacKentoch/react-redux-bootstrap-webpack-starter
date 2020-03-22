import React from 'react';
import { render } from '@testing-library/react';
import BackToTopButton, { BackButtonPosition } from '../BackToTopButton';

describe('BackToTopButton component', () => {
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
    const position: BackButtonPosition = 'bottom-left';
    const props = {
      position,
      onClick: () => {},
      motionStyle: {},
    };

    const { container } = render(
      <BackToTopButton {...props}>
        <p>a child</p>
      </BackToTopButton>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
