import { handleActions, Action } from 'redux-actions';

import { IAuthState, IUser } from './models';
import * as actions from './actions';

const initialState: IAuthState = {
  isRestoreCurrentUser: false,
  isLoading: false,
  isAuthenticated: false,
  error: false,
  user: {
    display_name: '',
    real_name: '',
  },
};

const reducer = {
  [actions.restoreCurrentUser.toString()]: (state: IAuthState): IAuthState => {
    return {
      ...state,
      isRestoreCurrentUser: true,
    };
  },
  [actions.login.toString()]: (state: IAuthState): IAuthState => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [actions.loginSuccess.toString()]: (
    state: IAuthState,
    { payload: user }: Action<IUser>
  ): IAuthState => {
    return {
      ...state,
      isAuthenticated: true,
      isRestoreCurrentUser: false,
      isLoading: false,
      user,
    };
  },
  [actions.loginFailed.toString()]: (state: IAuthState): IAuthState => {
    return {
      ...state,
      isRestoreCurrentUser: false,
      isLoading: false,
      error: true,
    };
  },
  [actions.logout.toString()]: (state: IAuthState): IAuthState => {
    return initialState;
  },
};

export default handleActions<IAuthState, IUser>(reducer, initialState);
