import {
  AlertState,
  AlertAction,
  SET_ALERT_SUCCESS,
} from "../Types/searchCryptoTypes";

const defaultState: AlertState = {
  message: "",
};

export default (state = defaultState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SET_ALERT_SUCCESS:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
