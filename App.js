/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import httpInterceptor from './src/core/interceptor';
import Navigation from './src/navigation';
import store from './src/store';
import ROOT_ACTIONS from './src/store/actions';

httpInterceptor(store);

const App = () => {
  AsyncStorage.getItem('token', (token) => {
    if (token) {
      store.dispatch({
        type: ROOT_ACTIONS.AUTH_ACTIONS.SET_TOKEN,
        payload: token,
      });

      store.dispatch({
        type: ROOT_ACTIONS.AUTH_ACTIONS.SET_SIGNED_IN,
        payload: true,
      });
    }
  });

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
