import { combineReducers } from 'redux';

import auth from '../auth/reducer';
import disk from '../../scenes/Disk/services/reducer';
import { IStoreState } from './models';

const rootReducer = combineReducers<IStoreState>({
  auth,
  disk,
});

export default rootReducer;
