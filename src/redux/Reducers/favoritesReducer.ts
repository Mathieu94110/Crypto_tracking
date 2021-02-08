import {
  FavoritesCryptoState,
  ADD_CRYPTO,
  DELETE_CRYPTO,
  FavoritesCryptoData,
  FavoritesCryptoTypes,
} from "../Types/searchCryptoTypes";

const defaultState: FavoritesCryptoState = {
  favoriteDatas: [],
  position: 0,
};

const favoritesCryptoReducer = (
  state = defaultState,
  action: FavoritesCryptoTypes
): FavoritesCryptoState => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        favoriteDatas: [...state.favoriteDatas, { ...action.payload }],
      };
    /*  case DELETE_CRYPTO:
      return state.filter((favorites) => favorites.id != action.payload);*/

    default:
      return state;
  }
};

export default favoritesCryptoReducer;
