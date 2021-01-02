import {
  IProjectModel,
  IProjectsSlice,
} from 'features/Projects/Projects.models';

type State = { projects: IProjectsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.projects.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.projects.isLoading;

const getCollection = (state: State): IProjectModel[] =>
  state.projects.collection;

export const projectsSelectors = {
  getIsEditModalOpen,
  getIsLoading,
  getCollection,
};
