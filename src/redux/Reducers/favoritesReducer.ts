
import {FavoritesCryptoState,ADD_CRYPTO,DELETE_CRYPTO,FavoritesCryptoData, FavoritesCryptoTypes } from "../Types/searchCryptoTypes";


const defaultState: FavoritesCryptoState = {
  favoriteDatas: [],
  position : 0
};



const favoritesCryptoReducer = (state = defaultState, action: FavoritesCryptoTypes ): FavoritesCryptoState => {
  
    switch (action.type) {
     case ADD_CRYPTO:
      return {
          favoriteDatas: [...state.favoriteDatas, { position: ++position, ...action.payload }]
      }
    case DELETE_CRYPTO:
      return {
       FavoritesCryptoData:   state.favorites.filter((favorite) => favorite.position != action.payload.position )
      }
    default:
      return state
  }
};

export default favoritesCryptoReducer;


