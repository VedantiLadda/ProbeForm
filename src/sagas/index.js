import { all } from 'redux-saga/effects';
import dashboardSaga from '../features/dashboard/sagas';

export default function* rootSaga() {
  yield all([dashboardSaga()]);
}
