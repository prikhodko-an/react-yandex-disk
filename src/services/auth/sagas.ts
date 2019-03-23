import { call, takeLatest, put } from 'redux-saga/effects';

import * as actions from './actions';
import api from '../api';
import { YANDEX_PASSPORT_URL } from '../config.json';

function* login() {
  try {
    const user = yield call(api.get, YANDEX_PASSPORT_URL);
    if (user) {
      yield put(actions.loginSuccess(user.data));
    } else {
      // TODO: handle error
    }
  } catch (e) {
    // console.log(e); // TODO: handle error
  }
}

export default function* authSaga() {
  yield takeLatest(actions.login, login);
}
