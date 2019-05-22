import React from 'react';
import { mount } from 'enzyme';
import LoginCard from './index';

describe('Login Card test cases', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<LoginCard />);
  });
  it('Check if state has fields username and password', () => {
    expect(wrapper.state().fields).toEqual({ username: '', password: '' });
  });
  it('renders nested components', () => {
    ['Card', 'Button'].forEach(component => expect(wrapper.find(component).length).toEqual(1));
    ['Label', 'Input'].forEach(component => expect(wrapper.find(component).length).toEqual(2));
  });
});
