import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Label from '../index';

describe('Label Component', () => {
  const mockFn = jest.fn();
  const props = {
    className: 'testClass',
    children: 'Label',
    handleClick: mockFn,
    htmlFor: 'name'
  };
  const wrapper = shallow(<Label {...props} />);
  it('should be defined', () => {
    expect(Label).toBeDefined();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('receives props', () => {
    expect(wrapper.find('label').props().className).toEqual('testClass');
    expect(wrapper.find('label').props().onClick).toBe(mockFn);
    expect(typeof wrapper.find('label').props().children).toBe('string');
    expect(typeof wrapper.find('label').props().htmlFor).toBe('string');
  });
  it('should call mock function when button is clicked', () => {
    wrapper.find('label').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
