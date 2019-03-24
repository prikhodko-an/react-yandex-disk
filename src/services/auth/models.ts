export interface IUser {
  display_name: string;
  real_name: string;
  first_name?: string;
  last_name?: string;
  client_id?: number;
  login?: string;
  sex?: string;
  id?: number;
}

export interface IAuthState {
  isRestoreCurrentUser: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: IUser;
  error: boolean;
}
