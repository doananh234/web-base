import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { apiWrapper } from '../reduxCreator';
import { AuthTypes, loginSuccessAction } from './actions';

function* loginSaga({ params }) {
  yield call(apiWrapper, delay, 2000);
  yield put(loginSuccessAction());
}

export default [takeEvery(AuthTypes.LOGIN, loginSaga)];
