import { ITasksSlice } from 'features/Tasks/Tasks.models';
import { createSelector } from '@reduxjs/toolkit';
import { projectsSelectors } from 'features/Projects/Projects.selectors';

type State = { tasks: ITasksSlice };

const getCollection = (state: State) => state.tasks.collection;

const getInboxTasks = createSelector(
  [getCollection, projectsSelectors.getInboxProject],
  (tasks, inboxProject) => {
    if (!inboxProject) return [];
    return tasks.filter((task) => task.project.id === inboxProject.id);
  }
);

const getIsLoading = (state: State) => state.tasks.isLoading;

export const tasksSelectors = {
  getInboxTasks,
  getIsLoading,
};
