import { createSelector } from 'reselect';
import _ from 'lodash';

const adminResourceSelector = (state, { resource = '' }) => state.admin.resources[resource];

const getFormValuesSelector = (state, { resource = '', id = '' }) => {
  if (
    !resource ||
    !state.admin.resources ||
    !state.admin.resources[resource] ||
    !state.admin.resources[resource].data
  )
    return null;
  return state.admin.resources[resource].data[id];
};

export const getListresource = createSelector(
  [adminResourceSelector],
  resource => {
    if (!resource) return [];
    return _.values(resource.data);
  }
);

export const getFormValues = createSelector(
  [getFormValuesSelector],
  data => data
  // data => {
  //   if (!data) return null;

  //   return _.reduce(
  //     data,
  //     (result, value, key) => {
  //       // eslint-disable-next-line
  //       result[key] = {
  //         value,
  //       };
  //       return result;
  //     },
  //     {}
  //   );
  // }
);
