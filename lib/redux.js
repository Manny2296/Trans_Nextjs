import { createStore, applyMiddleware } from 'redux';
//import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import doLogin from '../store/reducers/LoginReducer'

//import rootSaga from './saga';
//import rootReducer from './reducer';
export default (initialState) => {
  let store;
 // const sagaMiddleware = createSagaMiddleware();
  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };
    store = createStore(
      persistReducer(persistConfig, doLogin),
      initialState,
     
    );
     store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      doLogin,
      initialState,
     
    );
  }
  //store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};