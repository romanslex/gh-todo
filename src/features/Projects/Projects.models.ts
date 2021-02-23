import { Project } from 'common/models/Project';

export interface IProjectsSlice {
  isEditModalOpen: boolean;
  editProjectData?: IProjectModel;
  isLoading: boolean;
  collection: IProjectModel[];
}

export type IProjectModel = Project;

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: IProjectModel;
}
