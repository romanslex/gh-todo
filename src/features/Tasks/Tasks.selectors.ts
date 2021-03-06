import {
  ETaskBranchStatus,
  IEditTaskParams,
  ITasksSlice,
} from 'features/Tasks/Tasks.models';
import { createSelector } from '@reduxjs/toolkit';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

type State = { tasks: ITasksSlice };

const getCollection = (state: State) => state.tasks.collection;

const getInboxTasks = createSelector(
  [getCollection, projectsSelectors.getInboxProject],
  (tasks, inboxProject) => {
    if (!inboxProject) return [];
    return tasks.filter((task) => task.project.id === inboxProject.id);
  }
);

const getIsLoading = (state: State): boolean => state.tasks.isLoading;

const getEditFormIsOpen = (state: State): boolean =>
  state.tasks.editForm.isOpen;

const getEditFormData = (
  state: State
): ICreateTaskParams | IUpdateTaskParams | IEditTaskParams | undefined =>
  state.tasks.editForm.data;

const getStatus = (state: State): ETaskBranchStatus => state.tasks.status;

export const tasksSelectors = {
  getCollection,
  getInboxTasks,
  getIsLoading,
  getEditFormIsOpen,
  getEditFormData,
  getStatus,
};
