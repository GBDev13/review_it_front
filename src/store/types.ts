import { DefaultRootState } from 'react-redux';

export interface IMenus {
  mobileIsOpen: boolean;
}

export interface IUser {
  id: string | null;
  is_expert: boolean | null;
  picture_url: string;
  nickname: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export interface IState extends DefaultRootState {
  menus: IMenus;
  user: IUser;
}
