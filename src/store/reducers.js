import {combineReducers} from 'redux';

import AUTH_REDUCER from './auth/reducer';

export default combineReducers({
  auth: AUTH_REDUCER,
});
