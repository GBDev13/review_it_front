import { DefaultRootState } from 'react-redux';

export interface IMenus {
  mobileIsOpen: boolean;
}

export interface IState extends DefaultRootState {
  menus: IMenus;
}
