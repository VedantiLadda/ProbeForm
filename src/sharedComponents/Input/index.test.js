import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from './index';

describe('Input Component Test Cases', () => {
  const mockFn = jest.fn();
  const props = {
    type: 'text',
    value: 'John',
    name: 'name',
    placeholder: 'First Name',
    disabled: false,
    onchange: mockFn
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });

  it('should be defined', () => {
    expect(Input).toBeDefined();
  });

  it('should receives props', () => {
    const inputProps = wrapper.find('input').props();
    expect(inputProps).toMatchObject({
      type: 'text',
      value: 'John',
      name: 'name',
      placeholder: 'First Name',
      disabled: false
    });
  });

  it('should call mock function when value is changed', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Jack' } });
    expect(mockFn).toHaveBeenCalledWith({ target: { value: 'Jack' } });
  });
});
