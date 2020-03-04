import { Provider } from 'react-redux'
import App, { Container } from 'next/app';
import React from "react";
import { createStore, applyMiddleware } from 'redux'
//import reduxstore from '../store/configStore'
import withRedux from "next-redux-wrapper";
//import {makeStore} from "../lib/redux";
import thunk from 'redux-thunk';
import doLogin from '../store/reducers/LoginReducer'
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from '../lib/redux';
/*const makeStore =  (initialState = {}) => {
  
    return createStore(doLogin, initialState,applyMiddleware(thunk));
 };*/
 

class NextJsKiosco extends App {

    
  
      render() {
          const {Component, pageProps, store} = this.props;
  
          //console.log(this.props.data); <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          return (
              
              <Provider store={store}>
                 <PersistGate persistor={store.__PERSISTOR} loading={null}>
                  <Component {...pageProps} />
                  </PersistGate>
                
              </Provider>
              
          );
      }
  
  }
  

    
    export default withRedux(reduxStore)(NextJsKiosco); 