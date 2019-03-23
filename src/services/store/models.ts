import { IAuthState } from '../auth/models';
import { IDiskState } from '../../scenes/Disk/services/models';

export interface IStoreState {
  auth: IAuthState;
  disk: IDiskState;
}
