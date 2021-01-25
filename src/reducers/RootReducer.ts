import { combineReducers } from 'redux';
import cryptoFavoriteReducer from "./cryptoFavoriteReducer";

const RootReducer = combineReducers( {
    favorites: cryptoFavoriteReducer
});

export default RootReducer;