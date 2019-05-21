import { all } from 'redux-saga/effects';
// import * as dashboardSaga from '../features/dashboard/sagas';
import editProfileSaga from '../features/dashboard/sagas/editProfile';
import getAllPermisssionsSaga from '../features/dashboard/sagas/permissions';
import getAllTypesSaga from '../features/dashboard/sagas/types';

export default function* rootSaga() {
  // yield all([dashboardSaga()]);
  yield all([editProfileSaga(), getAllPermisssionsSaga(), getAllTypesSaga()]);
}
