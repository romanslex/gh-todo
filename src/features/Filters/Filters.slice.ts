import {
  ICreateFilterModel,
  IFilterModel,
  IFiltersSlice,
} from 'features/Filters/Filters.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: IFiltersSlice = {
  isEditModalOpen: false,
  isLoading: false,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateFilterModel, void, string>(
  'filters/create'
);

const getCollection = ReduxHelpers.createAction<void, IFilterModel[], string>(
  'filters/getCollection'
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState as IFiltersSlice,
  reducers: {
    toggleEditModal(state, { payload }: PayloadAction<boolean>) {
      state.isEditModalOpen = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(create.try, (state) => {
        state.isLoading = true;
      })
      .addCase(create.success, (state) => {
        state.isLoading = false;
      })
      .addCase(create.fail, (state) => {
        state.isLoading = false;
      })
      .addCase(getCollection.try, (state) => {
        state.isLoading = true;
      })
      .addCase(getCollection.success, (state, { payload }) => {
        state.collection = payload;
        state.isLoading = false;
      })
      .addCase(getCollection.fail, (state) => {
        state.isLoading = false;
      }),
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = {
  ...filtersSlice.actions,
  create,
  getCollection,
};
