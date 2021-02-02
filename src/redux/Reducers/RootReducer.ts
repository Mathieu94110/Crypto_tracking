import { combineReducers } from 'redux';
import searchCryptoReducer from "./searchCryptoReducer";
import alertReducer from "./alertReducer";
import favoritesCryptoReducer from "./favoritesReducer"


const RootReducer = combineReducers({
    search: searchCryptoReducer,
    favorites:favoritesCryptoReducer,
    alert: alertReducer
});

export default RootReducer;