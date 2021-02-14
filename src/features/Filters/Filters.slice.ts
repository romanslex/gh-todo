import {
  ICreateFilterModel,
  IFilterModel,
  IFiltersSlice,
  IToggleEditModalParams,
} from 'features/Filters/Filters.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: IFiltersSlice = {
  isEditModalOpen: false,
  editFilterData: undefined,
  isLoading: false,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateFilterModel, void, string>(
  'filters/create'
);

const getCollection = ReduxHelpers.createAction<void, IFilterModel[], string>(
  'filters/getCollection'
);

const remove = ReduxHelpers.createAction<string, void, string>(
  'filters/remove'
);

const update = ReduxHelpers.createAction<IFilterModel, void, string>(
  'filters/update'
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState as IFiltersSlice,
  reducers: {
    toggleEditModal(
      state,
      { payload: { isOpen, data } }: PayloadAction<IToggleEditModalParams>
    ) {
      state.editFilterData = data;
      state.isEditModalOpen = isOpen;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(create.try, (state) => {
        state.isLoading = true;
      })
      .addCase(create.success, (state) => {
        state.isLoading = false;
        state.isEditModalOpen = false;
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
      })
      .addCase(update.try, (state, { payload }) => {
        state.editFilterData = payload;
        state.isLoading = true;
      })
      .addCase(update.success.type, (state) => {
        state.isLoading = false;
        state.isEditModalOpen = false;
      })
      .addCase(update.fail.type, (state) => {
        state.isLoading = false;
      }),
});

export const filtersReducer = filtersSlice.reducer;
export const filtersActions = {
  ...filtersSlice.actions,
  create,
  getCollection,
  remove,
  update,
};
