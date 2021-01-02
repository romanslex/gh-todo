import { IProjectsSlice } from 'features/Projects/Projects.models';

type State = { projects: IProjectsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.projects.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.projects.isLoading;

export const projectsSelectors = {
  getIsEditModalOpen,
  getIsLoading,
};
