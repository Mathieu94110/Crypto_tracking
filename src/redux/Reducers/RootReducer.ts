import { combineReducers } from "redux";
import searchCryptoReducer from "./searchCryptoReducer";
import alertReducer from "./alertReducer";
import successAlertReducer from "./successAlertReducer";
import favoritesCryptoReducer from "./favoritesReducer";

const RootReducer = combineReducers({
  search: searchCryptoReducer,
  favorites: favoritesCryptoReducer,
  alert: alertReducer,
  successAlert: successAlertReducer,
});

export default RootReducer;
