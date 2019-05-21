import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

const api = (sapientId, name, email, type, designation) =>
  axios.post('http://localhost:5000/v1/apis/editEmployee', {
    sapientId,
    name,
    email,
    type,
    designation
  });

function* editProfile(action) {
  const { sapientId, name, email, auth, designation } = action;
  const response = yield call(api, sapientId, name, email, auth, designation);
  if (response.status === 200) {
    yield put({
      type: 'PROFILE_EDITED',
      data: {
        sapientId,
        name,
        email,
        auth,
        designation
      }
    });
  }
}

export default function* editProfileSaga() {
  yield takeEvery('EDIT_PROFILE', editProfile);
}
