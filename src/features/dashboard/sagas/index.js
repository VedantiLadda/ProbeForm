import { all } from 'redux-saga/effects';
import editProfileSaga from './editProfile';
import getAllPermisssionsSaga from './permissions';
import getAllTypesSaga from './types';

export default function* dashboardSaga() {
  yield all([editProfileSaga(), getAllPermisssionsSaga(), getAllTypesSaga()]);
}
