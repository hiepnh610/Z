import {Alert} from 'react-native';
import {takeLatest, call, put} from 'redux-saga/effects';

import APIs from 'src/constants/apis';
import HTTP_REQUEST from 'src/utils/httpRequest';
import ROOT_ACTIONS from 'src/store/actions';
import LOGIN_ACTIONS from './actions';

function login(params) {
  return HTTP_REQUEST.POST({
    path: APIs.LOGIN,
    params,
  });
}

function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    const token = (response.data && response.data.token) || '';

    yield put({
      type: ROOT_ACTIONS.AUTH_ACTIONS.SET_TOKEN,
      payload: token,
    });

    yield put({
      type: ROOT_ACTIONS.AUTH_ACTIONS.SET_SIGNED_IN,
      payload: true,
    });
  } catch (error) {
    const errorMessage =
      (error.response && error.response.data && error.response.data.message) ||
      'Error happened.';

    Alert.alert('Error', errorMessage, [{text: 'Close'}]);
  }
}

export default function* loginRootSaga() {
  yield takeLatest(LOGIN_ACTIONS.LOGIN, loginSaga);
}
