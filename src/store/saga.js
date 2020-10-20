import {all} from 'redux-saga/effects';

import loginSaga from 'src/scenes/login/store/saga';

export default function* rootSaga() {
  yield all([loginSaga()]);
}
