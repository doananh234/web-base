import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const AdminTypes = makeConstantCreator(
  'FETCH_LIST_RESOURCE',
  'FETCH_LIST_RESOURCE_SUCCESS',
  'FETCH_RESOURCE_BY_ID',
  'FETCH_RESOURCE_BY_ID_SUCCESS',
  'EDIT_RESOURCE',
  'EDIT_RESOURCE_SUCCESS',
  'DELETE_RESOURCE_BY_ID',
  'DELETE_RESOURCE_BY_ID_SUCCESS',
);

export const fetchListResourceAction = (resource, query) => makeActionCreator(AdminTypes.FETCH_LIST_RESOURCE, { resource, query });
export const fetchListResourceSuccessAction = (resource, data) => makeActionCreator(AdminTypes.FETCH_LIST_RESOURCE_SUCCESS, { resource, data });

export const fetchResourceByIdAction = (resource, id) => makeActionCreator(AdminTypes.FETCH_RESOURCE_BY_ID, { resource, id });
export const fetchResourceByIdSuccessAction = (resource, data) => makeActionCreator(AdminTypes.FETCH_RESOURCE_BY_ID_SUCCESS, {
    resource,
    data,
  });

export const editResourceAction = (resource, id, params) => makeActionCreator(AdminTypes.EDIT_RESOURCE, { resource, id, params });
export const editResourceSuccessAction = (resource, data) => makeActionCreator(AdminTypes.EDIT_RESOURCE_SUCCESS, { resource, data });

export const deleteResourceByIdAction = (resource, id) => makeActionCreator(AdminTypes.DELETE_RESOURCE_BY_ID, { resource, id });
export const deleteResourceByIdSuccessAction = (resource, data) => makeActionCreator(AdminTypes.DELETE_RESOURCE_BY_ID_SUCCESS, {
    resource,
    data,
  });
