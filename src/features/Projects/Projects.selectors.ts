import { IProjectsSlice } from 'features/Projects/Projects.models';

type State = { projects: IProjectsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.projects.isEditModalOpen;

export const projectsSelectors = {
  getIsEditModalOpen,
};
