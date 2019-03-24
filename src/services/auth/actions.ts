import { createAction } from 'redux-actions';
import { IUser } from './models';

export const login = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction<IUser>('LOGIN_SUCCESS');
export const loginFailed = createAction('LOGIN_FAILED');
export const restoreCurrentUser = createAction('RESTORE_CURRENT_USER');
export const logout = createAction('LOGOUT');
