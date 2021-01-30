export const SEARCH_CRYPTO_LOADING = "SEARCH_CRYPTO_LOADING";
export const SEARCH_CRYPTO_FAIL = "SEARCH_CRYPTO_FAIL";
export const SEARCH_CRYPTO_SUCCESS = "SEARCH_CRYPTO_SUCCESS";
export const SET_ALERT = 'SET_ALERT';
export const SET_ERROR = 'SET_ERROR';
export const ADD_CRYPTO = 'ADD_CRYPTO';
export const DELETE_CRYPTO = 'DELETE_CRYPTO';

export type SearchCryptoData = {
  

    id: string,
    image: string,
    name: string,
    symbol: string,
    current_price: number,
  
   

}



/*********************** */
/* Type of datas */
export interface FavoritesData {
   id: string,
    image: string,
    name: string,
    symbol: string,
  current_price: number,

}





/**/
export interface FavoritesCryptoData {
  favoritesCryptoDatas: FavoritesData[];
}





/*  interface ADD cRYPTO*/
export interface AddCryptoSuccess {
  type: typeof ADD_CRYPTO,
  payload: FavoritesData;
}
/*  interface Delete cRYPTO */ 
export interface DeleteCryptoSuccess {
  type: typeof DELETE_CRYPTO,
  payload: FavoritesCryptoData;
}
/* State */
export interface FavoritesCryptoState {
  favoriteDatas: FavoritesCryptoData[]
}

export type FavoritesCryptoTypes = AddCryptoSuccess | DeleteCryptoSuccess;
/****************** */









export interface SearchCryptoError {
  cod: string;
  message: string;
}

export interface SearchCryptoState {
  data: SearchCryptoData | null;
  loading: boolean;
}


export interface SearchCryptoLoading {
    type: typeof SEARCH_CRYPTO_LOADING
}
export interface SearchCryptoFail {
    type: typeof SEARCH_CRYPTO_FAIL
}
export interface SearchCryptoSuccess {
  type: typeof SEARCH_CRYPTO_SUCCESS,
  payload: SearchCryptoData;

}
export type SearchCryptoActions = SearchCryptoLoading | SearchCryptoFail | SearchCryptoSuccess;



export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}