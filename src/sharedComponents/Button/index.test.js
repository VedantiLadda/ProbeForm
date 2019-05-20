import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('receives props', () => {
    const component = mount(<Button className="test" />);
    expect(component.props().className).toEqual('test');
  });
});
