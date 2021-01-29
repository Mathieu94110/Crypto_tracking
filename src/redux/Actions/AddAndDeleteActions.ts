import {ADD_CRYPTO,DELETE_CRYPTO,FavoritesCryptoData,FavoritesCryptoTypes} from '../Types/searchCryptoTypes';

export const addCrypto = (favoriteDatas: FavoritesCryptoData): FavoritesCryptoTypes => {
    return {
        type: ADD_CRYPTO,
        payload: favoriteDatas
    }
};


export const deleteFavoriteAction = (position: number): FavoritesCryptoTypes => {
    return{
 type: DELETE_CRYPTO,
    position: number
    }
   
}