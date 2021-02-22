import { ITaskDTO } from 'common/models/dtos';

export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
  editForm: IEditFormBranch;
}

export type ITaskModel = ITaskDTO;

export interface IEditFormBranch {
  isOpen: boolean;
}
