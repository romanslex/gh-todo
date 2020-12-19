import { ISidebarSlice } from 'features/Sidebar/Sidebar.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ISidebarSlice = {
  isMobileMenuOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initialState as ISidebarSlice,
  reducers: {
    toggleMobileMenu(state, { payload }: PayloadAction<boolean>) {
      state.isMobileMenuOpen = payload;
    },
  },
});

export const sidebarReducer = sidebarSlice.reducer;
export const sidebarActions = sidebarSlice.actions;
