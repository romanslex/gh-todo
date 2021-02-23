import { ITaskDTO } from 'common/models/TaskDTO';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
  editForm: IEditFormBranch;
}

export type ITaskModel = ITaskDTO;

export interface IEditFormBranch {
  isOpen: boolean;
  data?: ICreateTaskParams | IUpdateTaskParams;
}
