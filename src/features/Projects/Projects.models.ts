import {
  EProjectColor,
  IBackendProjectModel,
} from 'features/Projects/backend/Projects.models';

export interface IProjectsSlice {
  isEditModalOpen: boolean;
  editProjectData?: IProjectModel;
  isLoading: boolean;
  collection: IProjectModel[];
}

export type IProjectModel = IBackendProjectModel;

export interface ICreateProjectModel {
  name: string;
  color: EProjectColor;
}

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: IProjectModel;
}
