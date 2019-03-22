import { combineReducers } from 'redux';

import auth from '../auth/reducer';
import { IStoreState } from './models';

const rootReducer = combineReducers<IStoreState>({
  auth,
} as any);

export default rootReducer;
