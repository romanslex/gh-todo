import {
  IEditFormBranch,
  ITaskModel,
  ITasksSlice,
} from 'features/Tasks/Tasks.models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';
import {
  ICreateTaskParams,
  IGetTaskCollectionParams,
} from 'common/models/requestsModels';

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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState as ITasksSlice,
  reducers: {
    toggleEditForm(
      state,
      { payload: { isOpen } }: PayloadAction<IEditFormBranch>
    ) {
      state.editForm.isOpen = isOpen;
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

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = { ...tasksSlice.actions, create, getCollection };
