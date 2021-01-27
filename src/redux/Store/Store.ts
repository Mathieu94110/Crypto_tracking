import { createStore , applyMiddleware} from 'redux';
import RootReducer from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
//video a 37 min comparer
const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk))) ;
export type RootStore = ReturnType<typeof RootReducer>
export default store;
