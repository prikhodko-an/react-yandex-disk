export interface IDiskItem {
  resource_id: string;
  name: string;
  type: string;
  path: string;
  preview?: string;
}

export interface IDiskFolder {
  name: string;
  type: string;
  path: string;
  items: IDiskItem[];
}

export interface IDiskState {
  isLoading: boolean;
  folder: IDiskFolder;
  error: IDiskError;
}

export interface IDiskError {
  message: string;
  description: string;
  error: string;
}
