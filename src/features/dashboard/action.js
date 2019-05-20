import axios from 'axios';

export function editProfile(sapientId, name, email, auth, designation) {
  // axios.post('http://localhost:5000/v1/apis/editEmployee', {
  //   sapientId, name, email, type, designation,
  // }).then((res) => {
  //   console.log(res);
  // });
  return {
    type: 'EDIT_PROFILE',
    sapientId,
    name,
    email,
    auth,
    designation
  };
}
export function getPermissions(type) {
  return dispatch => {
    axios.post('http://localhost:5000/v1/apis/getPermissions', { type }).then(res => {
      dispatch({ type: 'PERMISSIONS', res });
    });
  };
}

export function setModal(permission) {
  return { type: 'SET_MODAL', permission };
}
