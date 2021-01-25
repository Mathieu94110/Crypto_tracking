export const SEARCH_CRYPTO_LOADING = "SEARCH_CRYPTO_LOADING";
export const SEARCH_CRYPTO_FAIL = "SEARCH_CRYPTO_FAIL";
export const SEARCH_CRYPTO_SUCCESS = "SEARCH_CRYPTO_SUCCESS";


export type SearchCryptoType = {

    id: SearchCryptoId,
    image: SearchCryptoImage ,
    name: SearchCryptoName,
    symbol: SearchCryptoSymbol,
    current_price: SearchCryptoPrice
       
}


export type SearchCryptoId = {
  id: string,
}
export type SearchCryptoImage = {
  image: string,
}
export type SearchCryptoName = {
name: string,
}
export type SearchCryptoSymbol = {
 symbol: string,
}
export type SearchCryptoPrice = {
    current_price: number
}
















export interface SearchCryptoLoading {
    type: typeof SEARCH_CRYPTO_LOADING
}
export interface SearchCryptoFail {
    type: typeof SEARCH_CRYPTO_FAIL
}
export interface SearchCryptoSuccess{
    type: typeof SEARCH_CRYPTO_SUCCESS,
    payload: SearchCryptoType;
}

export type SearchCryptoDispatchTypes = SearchCryptoLoading | SearchCryptoFail | SearchCryptoSuccess;