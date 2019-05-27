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

export function createRole(roleBody) {
  return dispatch => {
    axios.post('http://localhost:5000/v1/apis/create_role', roleBody).then(res => {
      console.log(res);
      dispatch({ type: 'CREATE_ROLE', res });
    });
  };
}

export function addQuestion(question) {
  return dispatch => {
    axios.post('http://localhost:5000/v1/apis/add_questions', question).then(res => {
      console.log(res);
      dispatch({ type: 'ADD_QUESTION', res });
    });
  };
}

export function addUser(user) {
  return dispatch => {
    axios.post('http://localhost:5000/v1/apis/add_users', user).then(res => {
      console.log(res);
      dispatch({ type: 'ADD_USER', res });
    });
  };
}
