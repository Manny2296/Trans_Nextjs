import { createStore } from 'redux'
import doLogin from './reducers/LoginReducer'
import { persistStore } from 'redux-persist';
export default (initialState) => {
    let store;
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const rootPersistconf = {
      key:'root',
      storage,
  } 
  store = createStore(
    persistReducer(rootPersistconf, doLogin),
    initialState,
   
  );
   store.__PERSISTOR = persistStore(store);
   return store;
   }

