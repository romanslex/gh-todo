import { IFiltersSlice } from 'features/Filters/Filters.models';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IFiltersSlice = {
  isEditModalOpen: false,
  isLoading: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState as IFiltersSlice,
  reducers: {},
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = filtersSlice.actions;
