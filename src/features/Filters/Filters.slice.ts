import {
  ICreateFilterModel,
  IFiltersSlice,
} from 'features/Filters/Filters.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: IFiltersSlice = {
  isEditModalOpen: false,
  isLoading: false,
};

const create = ReduxHelpers.createAction<ICreateFilterModel, void, string>(
  'filters/create'
);

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
export const filtersActions = { ...filtersSlice.actions, create };
