import {combineReducers} from 'redux';

import AUTH_REDUCER from './auth/reducer';
import ERROR_REDUCER from './error/reducer';

export default combineReducers({
  auth: AUTH_REDUCER,
  generalError: ERROR_REDUCER,
});
