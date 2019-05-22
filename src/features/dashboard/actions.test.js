import * as actions from './action';

describe('Test suite for dashboard actions', () => {
  it('returns an action of type EDIT_PROFILE', () => {
    const params = ['145001', 'Sammed', 'samravan@publicissapient.com', 'super_admin'];
    const response = {
      sapientId: '145001',
      name: 'Sammed',
      email: 'samravan@publicissapient.com',
      auth: 'super_admin',
      designation: 'SAL1'
    };
    const expectedAction = { type: 'EDIT_PROFILE', ...response };
    expect(actions.editProfile(...params, 'SAL1')).toEqual(expectedAction);
  });
  it('returns an action of type GET_ALL_PERMISSIONS', () => {
    const expectedAction = { type: 'GET_ALL_PERMISSIONS' };
    expect(actions.getAllPermissions()).toEqual(expectedAction);
  });
});
