export interface IDiskItem {
  name: string;
  type: string;
  path: string;
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
}
