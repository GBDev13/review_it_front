import { createSlice } from '@reduxjs/toolkit';
import { IFilters } from '../types';

const initialState: IFilters = {
  techFilters: [] as String[],
  currentSearch: ''
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTechFilters(state, action) {
      state.techFilters = action.payload;
    },
    setCurrentSearch(state, action) {
      state.currentSearch = action.payload;
    },
    clearStoreFilters(state) {
      state.techFilters = [] as String[];
      state.currentSearch = '';
    }
  }
});

export const { setCurrentSearch, setTechFilters, clearStoreFilters } =
  slice.actions;
export default slice.reducer;
