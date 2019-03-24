import { handleActions, Action } from 'redux-actions';

import { IDiskState, IDiskFolder } from './models';
import * as disAactions from './actions';
import * as authActions from '../../../services/auth/actions';

const initialState: IDiskState = {
  isLoading: false,
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
  [authActions.logout.toString()]: (state: any): any => {
    return initialState;
  },
};

export default handleActions<IDiskState, IDiskFolder>(reducer, initialState);
