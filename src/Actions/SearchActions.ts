import { Dispatch } from "redux";
import {SearchCryptoDispatchTypes, SEARCH_CRYPTO_LOADING, SEARCH_CRYPTO_SUCCESS, SEARCH_CRYPTO_FAIL } from './SearchActionsTypes';
import coinGecko from "../Api/coinGecko";

export const GetCryptoCard = (favorites: string | number) => async (dispatch : Dispatch<SearchCryptoDispatchTypes>) => {
    try{
        dispatch({
    type:SEARCH_CRYPTO_LOADING
        })
        
const res = await coinGecko.get(
            'coins/markets/', {
            params: {
              vs_currency: "eur",
              ids: favorites /// accéder a ce state depuisle store
            }
          }
          )
        dispatch({
            type: SEARCH_CRYPTO_SUCCESS,
            payload: res.data[0]
})
    }catch(e){
        dispatch({
            type: SEARCH_CRYPTO_FAIL,
            
})
    }
};