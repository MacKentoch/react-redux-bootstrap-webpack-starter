import React from 'react';
import { render } from '@testing-library/react';
import UpIcon from '../UpIcon';

describe('UpIcon component', () => {
  let rootElement: any = null;

  const defaultProps = {
    color: '',
  };

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const props = { ...defaultProps };
    const { container } = render(<UpIcon {...props} />, rootElement);
    expect(container.firstChild).toMatchSnapshot();
  });
});
