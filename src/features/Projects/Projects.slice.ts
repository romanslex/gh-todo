import {
  ICreateProjectModel,
  IProjectsSlice,
} from 'features/Projects/Projects.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: IProjectsSlice = {
  isEditModalOpen: false,
  isLoading: false,
};

const create = ReduxHelpers.createAction<ICreateProjectModel, void, string>(
  'projects/create'
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialState as IProjectsSlice,
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
      }),
});

export const projectsReducer = projectsSlice.reducer;
export const projectsActions = { ...projectsSlice.actions, create };
