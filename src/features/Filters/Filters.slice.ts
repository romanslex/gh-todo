import { IFiltersSlice } from 'features/Filters/Filters.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IFiltersSlice = {
  isEditModalOpen: false,
  isLoading: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState as IFiltersSlice,
  reducers: {
    toggleEditModal(state, { payload }: PayloadAction<boolean>) {
      state.isEditModalOpen = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
