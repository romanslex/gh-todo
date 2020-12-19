import { IProjectsSlice } from 'features/Projects/Projects.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProjectsSlice = {
  isEditModalOpen: false,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialState as IProjectsSlice,
  reducers: {
    toggleEditModal(state, { payload }: PayloadAction<boolean>) {
      state.isEditModalOpen = payload;
    },
  },
});

export const projectsReducer = projectsSlice.reducer;
export const projectsActions = projectsSlice.actions;
