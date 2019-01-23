import { takeEvery, put, call } from 'redux-saga/effects';
import { keyBy } from 'lodash';
import { push } from 'connected-react-router';
import { apiWrapper } from '../reduxCreator';
import { getAPI, postAPI, putAPI } from '../../api';
import {
  AdminTypes,
  fetchListResourceSuccessAction,
  fetchResourceByIdSuccessAction,
  submitFormResourceSuccessAction,
  deleteResourceByIdSuccessAction,
} from './actions';

function* fetchListResourceSaga({ resource, query }) {
  try {
    const data = yield call(apiWrapper, getAPI, {}, `/${resource}`, null, query);
    yield put(fetchListResourceSuccessAction(resource, keyBy(data, res => res.id)));
  } catch (ex) {
    console.error(ex);
  }
}

function* submitFormResourceSaga({ resource, params }) {
  try {
    const { id, ...paramsReq } = params;
    if (id) {
      yield call(apiWrapper, putAPI, {}, `/${resource}/${id}`, paramsReq);
    } else {
      yield call(apiWrapper, postAPI, {}, `/${resource}`, paramsReq);
    }
    yield put(push(`/${resource}`));
  } catch (ex) {
    console.error(ex);
  }
}

export default [
  takeEvery(AdminTypes.FETCH_LIST_RESOURCE, fetchListResourceSaga),
  takeEvery(AdminTypes.SUBMIT_FORM_RESOURCE, submitFormResourceSaga),
];
