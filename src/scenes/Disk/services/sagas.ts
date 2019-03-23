import { call, takeLatest, put } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import * as actions from './actions';
import api from '../../../services/api';

const fields =
  'name, type, path, _embedded.items.name, _embedded.items.type, _embedded.items.path';

function* getFolder({ payload: path }: Action<string>) {
  try {
    const response = yield call(
      api.get,
      `resources?path=${path}&fields=${fields}`
    );

    const {
      _embedded: { items },
      ...rest
    } = response.data;

    const folder = {
      items,
      ...rest,
    };

    yield put(actions.getFolderSuccess(folder));
  } catch (e) {
    // console.log(e); // TODO: handle error
  }
}

export default function* diskSaga() {
  yield takeLatest(actions.getFolder, getFolder);
}
