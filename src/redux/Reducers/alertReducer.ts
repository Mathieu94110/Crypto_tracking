import { AlertState, AlertAction, SET_ALERT } from "../Types/searchCryptoTypes";

const defaultState: AlertState = {
  message: ''
}

export default (state = defaultState, action: AlertAction): AlertState => {
  switch(action.type) {
    case SET_ALERT:
      return {
        message: action.payload
      }
    default:
      return state;
  }
}