import { createSelector } from 'reselect';

import { IStoreState } from '../store/models';
import { IAuthState } from './models';

export const selectDomain = (state: IStoreState): IAuthState => state.auth;

// select auth state
export const selectAuth = createSelector<IStoreState, IAuthState, IAuthState>(
  selectDomain,
  (auth) => auth
);
