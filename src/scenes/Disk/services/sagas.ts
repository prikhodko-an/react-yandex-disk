import { call, takeLatest, put } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import * as actions from './actions';
import api from '../../../services/api';

const fieldsArray = [
  'name',
  'type',
  'path',
  '_embedded.items.name',
  '_embedded.items.type',
  '_embedded.items.path',
  '_embedded.items.preview',
  '_embedded.items.resource_id',
];

const fields = fieldsArray.join(', ');

function* getFolder({ payload: path }: Action<string>) {
  try {
    const response = yield call(
      api.get,
      `resources?path=${path}&fields=${fields}&limit=9999&preview_crop=true&preview_size=x40`
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
