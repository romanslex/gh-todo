import { ICreateTaskModel, ITasksSlice } from 'features/Tasks/Tasks.models';
import { createSlice } from '@reduxjs/toolkit';
import { ReduxHelpers } from 'common/Helpers/Redux.helpers';

const initialState: ITasksSlice = {
  isLoading: false,
  collection: [],
};

const create = ReduxHelpers.createAction<ICreateTaskModel, void, string>(
  'tasks/create'
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState as ITasksSlice,
  reducers: {},
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

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = { ...tasksSlice.actions, create };
