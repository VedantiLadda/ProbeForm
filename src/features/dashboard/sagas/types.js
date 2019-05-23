import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

const api = () => axios.get('http://localhost:5000/v1/apis/getAllTypes');

function* getAllTypes() {
  const response = yield call(api);
  if (response.status === 200) {
    // console.log(response);
    yield put({
      type: 'GOT_ALL_TYPES',
      data: response.data.map(object => object.type)
    });
  }
}

export default function* getAllTypesSaga() {
  yield takeEvery('GET_ALL_TYPES', getAllTypes);
}
