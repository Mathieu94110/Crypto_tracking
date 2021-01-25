
import {SearchCryptoDispatchTypes,SearchCryptoType , SEARCH_CRYPTO_SUCCESS, SEARCH_CRYPTO_FAIL, SEARCH_CRYPTO_LOADING } from "../Actions/SearchActionsTypes";

interface DefaultStateI{
  loading: boolean,
  searchCryptoFavorites?:SearchCryptoType
}

const defaultState: DefaultStateI = {
loading : false
};

const cryptoFavoriteReducer = (state: DefaultStateI = defaultState, action: SearchCryptoDispatchTypes ): DefaultStateI => {
  switch (action.type) {
     case SEARCH_CRYPTO_FAIL:
      return {
      loading:false
      }
    case SEARCH_CRYPTO_LOADING:
      return {
        loading: true
      }
    case SEARCH_CRYPTO_SUCCESS:
      return {
        loading: false,
        searchCryptoFavorites: action.payload
      }
   
    default:
      return state
  }
};

export default cryptoFavoriteReducer;






/*
import { createStore } from 'redux'

let id = 0;

const initialState:Array<string | number> = [];

// de ce type pour action
export interface ITodoAction extends Action {
    todo:string;
}



export const ADD_FAVORITE = "ADD_FAVORITE";

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [
        ...state,
        {
          id: ++id,

          completed: false,
          ...action.payload,
        },
      ];
    default:
      return state;
  }
};

export default todosReducer;
//let store = createStore(todosReducer)

*/