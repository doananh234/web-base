import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const PopupStatusTypes = makeConstantCreator('TOGGLE');

export const togglePopupAction = popupName =>
  makeActionCreator(PopupStatusTypes.TOGGLE, { popupName });
