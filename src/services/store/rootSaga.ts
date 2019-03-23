import { all, fork } from 'redux-saga/effects';

import authSaga from '../auth/sagas';
import diskSaga from '../../scenes/Disk/services/sagas';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(diskSaga)]);
}
