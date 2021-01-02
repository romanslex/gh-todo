import { ITagsSlice } from 'features/Tags/Tags.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ITagsSlice = {
  isEditModalOpen: false,
  isLoading: false,
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState as ITagsSlice,
  reducers: {
    toggleEditModal(state, { payload }: PayloadAction<boolean>) {
      state.isEditModalOpen = payload;
    },
  },
});

export const tagsReducer = tagsSlice.reducer;
export const tagsActions = tagsSlice.actions;
