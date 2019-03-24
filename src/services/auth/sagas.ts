import { call, takeLatest, put } from 'redux-saga/effects';

import * as actions from './actions';
import api from '../api';
import { YANDEX_PASSPORT_URL } from '../config.json';

export function* login() {
  try {
    // get user info from Yandex Passport API
    const user = yield call(api.get, YANDEX_PASSPORT_URL);
    if (user) {
      yield put(actions.loginSuccess(user.data));
    }
  } catch (e) {
    yield put(actions.loginFailed());
  }
}

export default function* authSaga() {
  yield takeLatest(actions.login, login);
}
