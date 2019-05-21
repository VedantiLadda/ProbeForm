import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

const api = () => axios.get('http://localhost:5000/v1/apis/getAllPermissions');

function* getAllPermissions() {
  const response = yield call(api);
  if (response.status === 200) {
    // console.log(response);
    yield put({
      type: 'GOT_ALL_PERMISSSIONS',
      data: response.data.map(object => object.permission)
    });
  }
}

export default function* getAllPermissionsSaga() {
  yield takeEvery('GET_ALL_PERMISSIONS', getAllPermissions);
}
