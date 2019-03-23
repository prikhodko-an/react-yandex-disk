import { createSelector } from 'reselect';

import { IStoreState } from '../../../services/store/models';
import { IDiskState } from './models';

export const selectDomain = (state: IStoreState): IDiskState => state.disk;

// select auth state
export const selectDisk = createSelector<IStoreState, IDiskState, IDiskState>(
  selectDomain,
  (disk) => disk
);
