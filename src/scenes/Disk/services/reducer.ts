import { handleActions, Action } from 'redux-actions';

import { IDiskState, IDiskFolder } from './models';
import * as actions from './actions';

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
  [actions.getFolderSuccess.toString()]: (
    state: IDiskState,
    { payload: folder }: Action<IDiskFolder>
  ): IDiskState => {
    return {
      ...state,
      isLoading: false,
      folder,
    };
  },
};

export default handleActions<IDiskState, IDiskFolder>(reducer, initialState);
