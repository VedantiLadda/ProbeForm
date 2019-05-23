import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as actions from './action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should return an action to store user details', () => {
    const mockResponse = {
      status: 200,
      data: {
        sapientId: '145001',
        name: 'Sammed',
        email: 'samravan@publicissapient.com',
        designation: 'SAL1',
        type: 'super_admin'
      }
    };
    const expectedAction = {
      type: 'LOGIN_RESPONSE',
      mockResponse
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockResponse);
    });
    moxios.stubRequest('http://localhost:5000/v1/apis/login', {
      status: 200,
      mockResponse
    });
    const store = mockStore({});
    return store
      .dispatch(actions.handleLogin('samravan@publicissapient.com', '123456'))
      .then(() => {
        expect(actions.handleLogin('samravan@publicissapient.com', '123456')).toEqual(
          expectedAction
        );
      });
  });
});
