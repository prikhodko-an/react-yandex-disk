import { handleActions, Action } from 'redux-actions';

import { IAuthState, IUser } from './models';
import * as actions from './actions';

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: {
    display_name: '',
    real_name: '',
  },
};

const reducer = {
  [actions.loginSuccess.toString()]: (state: IAuthState, { payload: user }: Action<IUser>) => {
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

export default handleActions<IAuthState, IUser>(reducer, initialState);
