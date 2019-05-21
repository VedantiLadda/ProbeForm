import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  const mockFn = jest.fn();
  const props = {
    className: 'testClass',
    children: 'Click Here',
    handleClick: mockFn,
    display: false
  };
  const wrapper = shallow(<Button {...props} />);
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should be of type button', () => {
    expect(wrapper.find('button').props().type).toEqual('button');
  });
  it('should receives props', () => {
    expect(wrapper.find('button').props().className).toEqual('testClass');
    expect(typeof wrapper.find('button').props().children).toBe('string');
    expect(typeof wrapper.find('button').props().onClick).toBe('function');
    expect(wrapper.find('button').props().style.display).toEqual('none');
  });
  it('should call mock function when card is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
