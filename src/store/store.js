import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import ROOT_REDUCER from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  ROOT_REDUCER,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

export default store;
