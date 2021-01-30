import {ADD_CRYPTO,DELETE_CRYPTO,FavoritesData,FavoritesCryptoTypes} from '../Types/searchCryptoTypes';

export const addCrypto = (favoriteData: FavoritesData): FavoritesCryptoTypes => {
    return {
        type: ADD_CRYPTO,
        payload: favoriteData
    }
};


export const deleteFavoriteAction = (position: number): FavoritesCryptoTypes => {
    return{
 type: DELETE_CRYPTO,
    position: number
    }
   
}