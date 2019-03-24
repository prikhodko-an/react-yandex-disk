import { all, put, call, fork } from 'redux-saga/effects';

import { getToken } from '../helpers';
import { restoreCurrentUser } from '../auth/actions';
import authSaga, { login } from '../auth/sagas';
import diskSaga from '../../scenes/Disk/services/sagas';

export default function* rootSaga() {
  const token = getToken();
  if (token) {
    yield put(restoreCurrentUser());
    yield call(login);
  }
  yield all([fork(authSaga), fork(diskSaga)]);
}
