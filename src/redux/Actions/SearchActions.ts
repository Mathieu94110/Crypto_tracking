import {SearchCryptoActions,SearchCryptoData, SEARCH_CRYPTO_LOADING, SEARCH_CRYPTO_SUCCESS, SEARCH_CRYPTO_FAIL} from '../Types/searchCryptoTypes';
import coinGecko from "../../Api/coinGecko";
import { ThunkAction } from 'redux-thunk';
import { RootStore } from '../Store/Store';

export const GetCryptoCard = (inputValue: string): ThunkAction<void, RootStore, null, SearchCryptoActions> => {
    return async dispatch => {
          try{
        
   const res = await fetch(
             `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${inputValue}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
              );
                  const resData:SearchCryptoData = await res.json();
                      //  const resData= await JSON.parse(JSON.stringify(res)).data 
              dispatch({
                  type:SEARCH_CRYPTO_SUCCESS,
                 payload: resData //tester le chemin precis avec action dans SearchCryptoData
              })
           
 
    }catch(e){
            dispatch({
              type: SEARCH_CRYPTO_FAIL,
              payload: e.message
            });
    }
    }

}   
  export const SearchCryptoLoading = (): SearchCryptoActions => {
  return {
    type: SEARCH_CRYPTO_LOADING
  }
}