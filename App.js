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
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';

import Navigation from './src/navigations';
import rootReducer from './src/store/reducers';
import rootSaga from './src/store/saga';
import ROOT_ACTIONS from './src/store/actions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

const App = () => {
  AsyncStorage.getItem('token', (token) => {
    if (token) {
      store.dispatch({
        type: ROOT_ACTIONS.AUTH_ACTION.SET_TOKEN,
        payload: token,
      });

      store.dispatch({
        type: ROOT_ACTIONS.AUTH_ACTION.SET_SIGNED_IN,
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
