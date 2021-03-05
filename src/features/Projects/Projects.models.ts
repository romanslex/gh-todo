import { Project } from 'common/models/Project';
import { IUpdateProjectParams } from 'common/models/IUpdateProjectParams';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';

export interface IProjectsSlice {
  isEditModalOpen: boolean;
  editProjectData?: IUpdateProjectParams | ICreateProjectParams;
  isLoading: boolean;
  collection: IProjectModel[];
}

export type IProjectModel = Project;

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: IProjectModel;
}
