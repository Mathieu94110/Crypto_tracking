import {
  SET_ALERT,
  AlertAction,
  SET_ALERT_SUCCESS,
} from "../Types/searchCryptoTypes";

export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message,
  };
};
export const setAlertSuccess = (message: string): AlertAction => {
  return {
    type: SET_ALERT_SUCCESS,
    payload: message,
  };
};
