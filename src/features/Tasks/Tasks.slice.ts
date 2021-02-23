import {
  IEditFormBranch,
  ITaskModel,
  ITasksSlice,
} from 'features/Tasks/Tasks.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IGetTaskCollectionParams } from 'common/models/IGetTaskCollectionParams';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

const initialState: ITasksSlice = {
  isLoading: false,
  collection: [],
  editForm: {
    isOpen: false,
  },
};

const create = ReduxHelpers.createAction<ICreateTaskParams, void, string>(
  'tasks/create'
);

const getCollection = ReduxHelpers.createAction<
  IGetTaskCollectionParams,
  ITaskModel[],
  string
>('tasks/getCollection');

const update = ReduxHelpers.createAction<IUpdateTaskParams, void, string>(
  'tasks/update'
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState as ITasksSlice,
  reducers: {
    toggleEditForm(
      state,
      { payload: { isOpen, data } }: PayloadAction<IEditFormBranch>
    ) {
      state.editForm.isOpen = isOpen;
      state.editForm.data = data;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(create.try, (state, { payload }) => {
        state.isLoading = true;
        state.editForm.data = payload;
      })
      .addCase(create.success, (state) => {
        state.editForm.isOpen = false;
        state.isLoading = false;
        state.editForm.data = undefined;
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
        state.isLoading = true;
        state.editForm.data = payload;
      })
      .addCase(update.success, (state) => {
        state.isLoading = false;
        state.editForm.isOpen = false;
        state.editForm.data = undefined;
      })
      .addCase(update.fail, (state) => {
        state.isLoading = false;
      }),
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = {
  ...tasksSlice.actions,
  create,
  getCollection,
  update,
};
