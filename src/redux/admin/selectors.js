import { createSelector } from 'reselect';
import _ from 'lodash';

const adminResourceSelector = (state, { resource = '' }) =>
  state.admin.resources[resource];

export const getListresource = createSelector(
  [adminResourceSelector],
  resource => {
    if (!resource) return [];
    return _.values(resource.data);
  }
);
