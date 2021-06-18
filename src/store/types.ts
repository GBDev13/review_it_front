import { DefaultRootState } from 'react-redux';

export interface IMenus {
  mobileIsOpen: boolean;
}

export interface IUser {
  username: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export interface IState extends DefaultRootState {
  menus: IMenus;
  user: IUser;
}
