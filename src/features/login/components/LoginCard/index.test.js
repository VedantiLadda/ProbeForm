import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import LoginCard from './index';

describe('Login Card test cases', () => {
  const wrapper = mount(<LoginCard />);

  it('Check if state has fields username and password', () => {
    expect(typeof wrapper.state().fields).toBe('object');
  });
});
