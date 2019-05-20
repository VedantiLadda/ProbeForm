import axios from 'axios';

export function handleLogin(email, pass) {
  return (dispatch) => {
    axios.post('http://localhost:5000/v1/apis/login', { email, pass }).then((res) => {
      dispatch({ type: 'LOGIN_RESPONSE', res });
    });
  };
}
