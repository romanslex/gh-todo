import {
  IProjectModel,
  IProjectsSlice,
} from 'features/Projects/Projects.models';
import { createSelector } from '@reduxjs/toolkit';

type State = { projects: IProjectsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.projects.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.projects.isLoading;

const getCollection = (state: State): IProjectModel[] =>
  state.projects.collection;

const getEditProjectData = (state: State): IProjectModel | undefined =>
  state.projects.editProjectData;

const getCollectionWithoutInbox = createSelector(
  [getCollection],
  (collection) => collection.filter((project) => !project.isInbox)
);

const getInboxProject = (state: State): IProjectModel | undefined =>
  state.projects.collection.find((project) => project.isInbox);

export const projectsSelectors = {
  getIsEditModalOpen,
  getIsLoading,
  getCollection,
  getEditProjectData,
  getCollectionWithoutInbox,
  getInboxProject,
};
