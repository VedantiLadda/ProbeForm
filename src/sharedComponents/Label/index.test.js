import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Label Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('receives props', () => {
    const component = mount(
      <Label className="test">
        <div />
      </Label>
    );
    expect(component.props().className).toEqual('test');
  });
});
