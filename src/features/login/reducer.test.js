import reducer from './reducer';

describe('Login Reducer tests', () => {
  const defStore = {
    sapientId: '',
    name: '',
    email: '',
    designation: '',
    type: ''
  };
  const testStore = {
    sapientId: '145001',
    name: 'Sammed',
    email: 'samravan@publicissapient.com',
    designation: 'SAL1',
    type: 'super_admin'
  };
  const testStore2 = {
    sapientId: '145001',
    name: 'Sammed',
    email: 'samravan@publicissapient.com',
    designation: 'SAL2',
    type: 'super_admin'
  };

  it('returns default store', () => {
    expect(reducer(undefined, {})).toEqual(defStore);
  });

  it('it updates store on successful login', () => {
    const action = {
      type: 'LOGIN_RESPONSE',
      res: {
        data: testStore
      }
    };
    expect(reducer(defStore, action)).toEqual(testStore);
  });

  it('returns default store if payload has no data in login response', () => {
    const action = {
      type: 'LOGIN_RESPONSE',
      res: { dummy: {} }
    };
    expect(reducer(defStore, action)).toEqual(defStore);
  });

  it('returns default store on logout', () => {
    const action = {
      type: 'LOGOUT'
    };
    expect(reducer({}, action)).toEqual(defStore);
  });

  it('updates store on successful profile edit', () => {
    const action = {
      type: 'PROFILE_EDITED',
      data: testStore2
    };
    expect(reducer(testStore, action)).toEqual(testStore2);
  });
});
