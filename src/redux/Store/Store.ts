import { createStore , applyMiddleware} from 'redux';
import RootReducer from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['favorites'] // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export type RootStore = ReturnType<typeof persistedReducer>
export { store, persistor } ;
