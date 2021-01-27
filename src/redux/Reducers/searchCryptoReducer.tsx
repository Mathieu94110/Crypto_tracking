
import {SearchCryptoState,SearchCryptoActions,SEARCH_CRYPTO_SUCCESS, SEARCH_CRYPTO_FAIL, SEARCH_CRYPTO_LOADING } from "../Types/searchCryptoTypes";



const defaultState: SearchCryptoState = {
  data: null,
  loading: false,

};

const searchCryptoReducer = (state = defaultState, action: SearchCryptoActions ): SearchCryptoState => {
  switch (action.type) {
     case SEARCH_CRYPTO_FAIL:
      return {
        ...state,
      loading:false
      }
    case SEARCH_CRYPTO_LOADING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_CRYPTO_SUCCESS:
      return {
       data : action.payload,
        loading: false,
        }
   
    default:
      return state
  }
};

export default searchCryptoReducer;






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