import { combineReducers } from 'redux';
import searchCryptoReducer from "./searchCryptoReducer";
import alertReducer from "./alertReducer";
const RootReducer = combineReducers({
    favorites: searchCryptoReducer,
    alert: alertReducer
});

export default RootReducer;