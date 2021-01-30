import { createStore , applyMiddleware} from 'redux';
import RootReducer from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'favoritesCryptoReducer',
  storage: storage,
  whitelist: ['favoritesCryptoReducer'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export type RootStore = ReturnType<typeof pReducer>
export default  store ;
