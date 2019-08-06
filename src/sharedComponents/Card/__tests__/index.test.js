import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Card from '../index';

describe('Card Component', () => {
  const mockFn = jest.fn();
  const props = { className: 'testClass', children: <h1>testHead</h1>, onClick: mockFn };
  const wrapper = shallow(<Card {...props} />);
  it('should be defined', () => {
    expect(Card).toBeDefined();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('receives props', () => {
    expect(wrapper.find('div').props().className).toEqual('testClass');
    expect(wrapper.find('div').props().onClick).toBe(mockFn);
    expect(wrapper.find('div').props().children).toBe(props.children);
  });
  it('should call mock function when button is clicked', () => {
    wrapper.find('div').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
