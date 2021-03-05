import {
  IProjectModel,
  IProjectsSlice,
  IToggleEditModalParams,
} from 'features/Projects/Projects.models';
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';
import { IUpdateProjectParams } from 'common/models/IUpdateProjectParams';

const initialState: IProjectsSlice = {
  isEditModalOpen: false,
  editProjectData: undefined,
  isLoading: false,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateProjectParams, void, string>(
  'projects/create'
);

const getCollection = ReduxHelpers.createAction<void, IProjectModel[], string>(
  'projects/getCollection'
);

const remove = ReduxHelpers.createAction<string, void, string>(
  'projects/remove'
);

const update = ReduxHelpers.createAction<
  IUpdateProjectParams,
  IProjectModel,
  string
>('projects/update');

const initInbox = createAction('projects/initInbox');

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialState as IProjectsSlice,
  reducers: {
    toggleEditModal(
      state,
      { payload: { data, isOpen } }: PayloadAction<IToggleEditModalParams>
    ) {
      state.editProjectData = data;
      state.isEditModalOpen = isOpen;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(create.try, (state, { payload }) => {
        state.isLoading = true;
        state.editProjectData = payload;
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
        state.isLoading = false;
        state.collection = payload;
      })
      .addCase(getCollection.fail, (state) => {
        state.isLoading = false;
      })
      .addCase(update.try, (state, { payload }) => {
        state.editProjectData = payload;
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

export const projectsReducer = projectsSlice.reducer;
export const projectsActions = {
  ...projectsSlice.actions,
  create,
  getCollection,
  remove,
  update,
  initInbox,
};
