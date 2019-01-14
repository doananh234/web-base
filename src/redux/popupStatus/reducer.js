import { PopupStatusTypes } from './actions';
import { makeReducerCreator } from '../reduxCreator';

export const initialState = {
  popupStatus: {}
};

const togglePopup = (state, { popupName }) => {
  return {
    ...state,
    popupStatus: {
      ...state.popupStatus,
      [popupName]: !!!state.popupStatus[popupName]
    }
  };
};

export const popupStatus = makeReducerCreator(initialState, {
  [PopupStatusTypes.TOGGLE]: togglePopup
});
