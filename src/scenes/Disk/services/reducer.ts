import { handleActions, Action } from 'redux-actions';

import { IDiskState, IDiskFolder, IDiskError } from './models';
import * as disAactions from './actions';
import * as authActions from '../../../services/auth/actions';

const initialState: IDiskState = {
  isLoading: false,
  error: {
    message: '',
    description: '',
    error: '',
  },
  folder: {
    name: '',
    type: '',
    path: '',
    items: [],
  },
};

const reducer = {
  [disAactions.getFolder.toString()]: (state: IDiskState): IDiskState => {
    return {
      ...initialState,
      isLoading: true,
    };
  },
  [disAactions.getFolderSuccess.toString()]: (
    state: IDiskState,
    { payload: folder }: Action<IDiskFolder>
  ): IDiskState => {
    return {
      ...state,
      isLoading: false,
      folder,
    };
  },
  [disAactions.getFolderFailed.toString()]: (
    state: IDiskState,
    { payload: error }: Action<IDiskError>
  ): IDiskState => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  },
  [authActions.logout.toString()]: (state: IDiskState): IDiskState => {
    return initialState;
  },
};

export default handleActions<IDiskState, IDiskFolder & IDiskError>(
  reducer,
  initialState
);
