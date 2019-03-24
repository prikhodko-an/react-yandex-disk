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
      isLoading: false,
      user,
    };
  },
  [actions.logout.toString()]: (state: IAuthState): IAuthState => {
    return initialState;
  },
};

export default handleActions<IAuthState, IUser>(reducer, initialState);
