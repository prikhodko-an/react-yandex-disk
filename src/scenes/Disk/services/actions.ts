import { createAction } from 'redux-actions';
import { IDiskFolder } from './models';

export const getFolder = createAction<string>('GET_FOLDER_REQUEST');
export const getFolderSuccess = createAction<IDiskFolder>('GET_FOLDER_SUCCESS');
