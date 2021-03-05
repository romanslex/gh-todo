import {
  ITagModel,
  ITagsSlice,
  IToggleEditModalParams,
} from 'features/Tags/Tags.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';
import { ICreateTagParams } from 'common/models/ICreateTagParams';

const initialState: ITagsSlice = {
  isEditModalOpen: false,
  isLoading: false,
  editTagData: undefined,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateTagParams, void, string>(
  'tags/create'
);

const getCollection = ReduxHelpers.createAction<void, ITagModel[], string>(
  'tags/getCollection'
);

const remove = ReduxHelpers.createAction<string, void, string>('tags/remove');

const update = ReduxHelpers.createAction<ITagModel, ITagModel, string>(
  'tags/update'
);

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState as ITagsSlice,
  reducers: {
    toggleEditModal(
      state,
      { payload: { isOpen, data } }: PayloadAction<IToggleEditModalParams>
    ) {
      state.editTagData = data;
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
        state.editTagData = payload;
        state.isLoading = true;
      })
      .addCase(update.success, (state) => {
        state.isLoading = false;
        state.isEditModalOpen = false;
      })
      .addCase(update.fail, (state) => {
        state.isLoading = false;
      }),
});

export const tagsReducer = tagsSlice.reducer;
export const tagsActions = {
  ...tagsSlice.actions,
  create,
  getCollection,
  remove,
  update,
};
