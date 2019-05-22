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
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

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
    const inputProps = wrapper.find('button').props();
    expect(inputProps).toMatchObject({
      className: 'testClass',
      children: 'Click Here'
    });
  });
  it('should call mock function when card is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
