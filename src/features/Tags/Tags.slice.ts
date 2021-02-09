import {
  ICreateTagModel,
  ITagModel,
  ITagsSlice,
} from 'features/Tags/Tags.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: ITagsSlice = {
  isEditModalOpen: false,
  isLoading: false,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateTagModel, void, string>(
  'tags/create'
);

const getCollection = ReduxHelpers.createAction<void, ITagModel[], string>(
  'tags/getCollection'
);

const remove = ReduxHelpers.createAction<string, void, string>('tags/remove');

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState as ITagsSlice,
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
      }),
});

export const tagsReducer = tagsSlice.reducer;
export const tagsActions = {
  ...tagsSlice.actions,
  create,
  getCollection,
  remove,
};
