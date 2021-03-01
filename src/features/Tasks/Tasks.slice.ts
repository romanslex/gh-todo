import {
  ETaskBranchStatus,
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
  status: ETaskBranchStatus.Init,
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

const remove = ReduxHelpers.createAction<string, void, string>('tasks/remove');

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
        state.status = ETaskBranchStatus.TaskCreating;
        state.editForm.data = payload;
      })
      .addCase(create.success, (state) => {
        state.editForm.isOpen = false;
        state.isLoading = false;
        state.editForm.data = undefined;
        state.status = ETaskBranchStatus.TaskCreated;
      })
      .addCase(create.fail, (state) => {
        state.isLoading = false;
      })
      .addCase(getCollection.try, (state) => {
        state.isLoading = true;
        state.collection = [];
        state.status = ETaskBranchStatus.CollectionFetching;
      })
      .addCase(getCollection.success, (state, { payload }) => {
        state.collection = payload;
        state.isLoading = false;
        state.status = ETaskBranchStatus.CollectionFetched;
      })
      .addCase(getCollection.fail, (state) => {
        state.isLoading = false;
      })
      .addCase(update.try, (state, { payload }) => {
        state.isLoading = true;
        state.editForm.data = payload;
        state.status = ETaskBranchStatus.TaskUpdating;
      })
      .addCase(update.success, (state) => {
        state.isLoading = false;
        state.editForm.isOpen = false;
        state.editForm.data = undefined;
        state.status = ETaskBranchStatus.TaskUpdated;
      })
      .addCase(update.fail, (state) => {
        state.isLoading = false;
      })
      .addCase(remove.try, (state) => {
        state.isLoading = true;
        state.status = ETaskBranchStatus.TaskRemoving;
      })
      .addCase(remove.success, (state) => {
        state.isLoading = false;
        state.editForm.isOpen = false;
        state.status = ETaskBranchStatus.TaskRemoved;
      })
      .addCase(remove.fail, (state) => {
        state.isLoading = false;
      }),
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = {
  ...tasksSlice.actions,
  create,
  getCollection,
  update,
  remove,
};
