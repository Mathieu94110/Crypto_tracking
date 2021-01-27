import { SET_ALERT, AlertAction } from '../Types/searchCryptoTypes';

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message
  }
}