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
    const token = yield call(login, action.payload);

    yield put({
      type: ROOT_ACTIONS.AUTH_ACTIONS.ADD_TOKEN,
      payload: token,
    });
  } catch (error) {
    const payload = {
      type: ROOT_ACTIONS.ERROR_ACTIONS.SET_ERROR_MESSAGE,
      payload: 'Error happened.',
    };
    const errorMessage =
      error.response && error.response.data && error.response.data.message;
    if (errorMessage) {
      payload.payload = errorMessage;
    }

    yield put(payload);
  }
}

export default function* loginRootSaga() {
  yield takeLatest(LOGIN_ACTIONS.LOGIN, loginSaga);
}
