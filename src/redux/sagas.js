import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import adminSaga from './admin/sagas';

export default function* root() {
  yield all([...authSaga, ...adminSaga]);
}
