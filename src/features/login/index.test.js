import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Login from './index';

describe('Login Caontainer test cases', () => {
  const initialStore = { sapientId: '', name: '', email: '', designation: '', type: '' };
  const mockStore = configureStore();
  const store = mockStore(initialStore);
  const wrapper = shallow(<Login store={store} />);
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
});
