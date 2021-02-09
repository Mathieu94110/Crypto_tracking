import {
  ADD_CRYPTO,
  DELETE_CRYPTO,
  FavoritesData,
  FavoritesCryptoTypes,
  FavoritesCryptoState,
} from "../Types/searchCryptoTypes";

export const addCrypto = (
  image: string,
  name: string,
  symbol: string,
  current_price: number
): FavoritesCryptoTypes => {
  return {
    type: ADD_CRYPTO,
    payload: {
      image,
      name,
      symbol,
      current_price,
    },
  };
};

export const deleteFavoriteAction = (id: number): FavoritesCryptoTypes => {
  return {
    type: DELETE_CRYPTO,
    payload: {
      id,
    },
  };
};
