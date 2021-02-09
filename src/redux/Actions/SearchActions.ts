import {
  SearchCryptoActions,
  FavoritesData,
  SEARCH_CRYPTO_LOADING,
  SEARCH_CRYPTO_SUCCESS,
  SEARCH_CRYPTO_FAIL,
  SearchCryptoState,
} from "../Types/searchCryptoTypes";
import { ThunkAction } from "redux-thunk";
import { RootStore } from "../Store/Store";
import { setAlert } from "./alertActions";

export const GetCryptoCard = (
  inputValue: string
): ThunkAction<void, RootStore, null, SearchCryptoActions> => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${inputValue}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const resData: SearchCryptoActions = await res.json();
      if (resData.length == 0) {
        dispatch(setAlert("introuvable"));
        dispatch({
          type: SEARCH_CRYPTO_FAIL,
          payload: "",
        });
        return;
      }
      //  const resData= await JSON.parse(JSON.stringify(res)).data
      dispatch({
        type: SEARCH_CRYPTO_SUCCESS,
        payload: resData, //tester le chemin precis avec action dans SearchCryptoData
      });
    } catch (e) {
      dispatch({
        type: SEARCH_CRYPTO_FAIL,
        payload: e.message,
      });
    }
  };
};
export const SearchCryptoLoading = (): SearchCryptoActions => {
  return {
    type: SEARCH_CRYPTO_LOADING,
  };
};
