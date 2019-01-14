import { takeEvery, put, call } from 'redux-saga/effects';
import { keyBy } from 'lodash';
import { apiWrapper } from '../reduxCreator';
import { getAPI } from '../../api';
import {
  AdminTypes,
  fetchListResourceSuccessAction,
  fetchResourceByIdSuccessAction,
  editResourceSuccessAction,
  deleteResourceByIdSuccessAction
} from './actions';

function* fetchListResourceSaga({ resource, query }) {
  try {
    const data = yield call(
      apiWrapper,
      getAPI,
      {},
      `/${resource}`,
      null,
      query
    );
    yield put(
      fetchListResourceSuccessAction(resource, keyBy(data, res => res.id))
    );
  } catch (ex) {
    console.error(ex);
  }
}

export default [
  takeEvery(AdminTypes.FETCH_LIST_RESOURCE, fetchListResourceSaga)
];
