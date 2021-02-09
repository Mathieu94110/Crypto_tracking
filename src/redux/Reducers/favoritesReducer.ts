import {
  FavoritesCryptoState,
  ADD_CRYPTO,
  DELETE_CRYPTO,
  FavoritesCryptoTypes,
  FavoritesCryptoActionTypes,
} from "../Types/searchCryptoTypes";

const defaultState: FavoritesCryptoState = {
  data: [],
};

const favoritesCryptoReducer = (
  state = defaultState,
  action: FavoritesCryptoActionTypes
): FavoritesCryptoState => {
  switch (action.type) {
    case ADD_CRYPTO:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            image: action.payload.image,
          },
        ],
      };
    case DELETE_CRYPTO:
      return {
        data: state.data.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default favoritesCryptoReducer;
