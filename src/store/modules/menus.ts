import { createSlice } from '@reduxjs/toolkit';
import { IMenus } from '../types';

const initialState: IMenus = {
  mobileIsOpen: false
};

const slice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    toggleMobileMenu(state, action) {
      state.mobileIsOpen = action.payload;
    }
  }
});

export const { toggleMobileMenu } = slice.actions;
export default slice.reducer;
