import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';


describe('Button Component', () => {
  it('receives props', () => {
    const props = {
      className: 'test',
      handleClick: jest.fn(),
    };
    const component = shallow(<Button {...props} />);
    expect(component.props().className).toEqual('test');
  });
  it('should call the click handler on click', () => {
    const props = {
        handleClick: jest.fn()
    };
    const component = shallow(<Button {...props} />);
    component.find('button').simulate('click');
    expect(props.handleClick).toHaveBeenCalled();

  });
});
