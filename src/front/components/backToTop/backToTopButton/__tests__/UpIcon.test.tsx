import React from 'react';
import { shallow } from 'enzyme';
import UpIcon from '../UpIcon';

describe('UpIcon component', () => {
  it('renders as expected', () => {
    const props = { color: '' };
    const component = shallow(
      <div>
        <UpIcon {...props} />
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
