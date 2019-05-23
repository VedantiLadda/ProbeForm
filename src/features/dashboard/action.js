import axios from 'axios';

export function editProfile(sapientId, name, email, auth, designation) {
  return { type: 'EDIT_PROFILE', sapientId, name, email, auth, designation };
}

export function getPermissions(type) {
  return dispatch => {
    axios.post('http://localhost:5000/v1/apis/getPermissions', { type }).then(res => {
      dispatch({ type: 'PERMISSIONS', res });
    });
  };
}

export function getAllPermissions() {
  return { type: 'GET_ALL_PERMISSIONS' };
}

export function getAllTypes() {
  return { type: 'GET_ALL_TYPES' };
}

export function setModal(permission) {
  return { type: 'SET_MODAL', permission };
}

export function handleLogout() {
  return { type: 'LOGOUT' };
}
