import { AdminTypes, deleteResourceByIdSuccessAction } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  resources: {}
};

const fetchingListResource = (state, { resource }) => {
  return {
    ...state,
    resources: {
      ...state.resources,
      [resource]: {
        ...state.resources[resource],
        isFetching: true
      }
    }
  };
};

const fetchListResourceSuccess = (state, { resource, data }) => {
  return {
    ...state,
    resources: {
      ...state.resources,
      [resource]: {
        ...state.resources[resource],
        data,
        isFetching: false
      }
    }
  };
};

const fetchResourceByIdSuccess = (state, { resource, data }) => {
  return {
    ...state,
    resources: {
      ...state.resources,
      [resource]: [
        ...state.resources[resource].map(re => {
          if (re.id === data.id) {
            return data;
          }
          return re;
        })
      ]
    }
  };
};

const deleteResourceByIdSuccess = (state, { resource, id }) => {
  return {
    ...state,
    resources: {
      ...state.resources,
      [resource]: [...state.resources[resource].filter(re => re.id !== id)]
    }
  };
};

export const admin = makeReducerCreator(initialState, {
  [AdminTypes.FETCH_LIST_RESOURCE]: fetchingListResource,
  [AdminTypes.FETCH_LIST_RESOURCE_SUCCESS]: fetchListResourceSuccess,
  [AdminTypes.FETCH_RESOURCE_BY_ID_SUCCESS]: fetchResourceByIdSuccess,
  [AdminTypes.EDIT_RESOURCE_SUCCESS]: fetchResourceByIdSuccess,
  [AdminTypes.DELETE_RESOURCE_BY_ID_SUCCESS]: deleteResourceByIdSuccess
});
