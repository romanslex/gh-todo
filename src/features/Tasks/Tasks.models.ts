import { ITaskDTO } from 'common/models/TaskDTO';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
  editForm: IEditFormBranch;
  status: ETaskBranchStatus;
}

export type ITaskModel = ITaskDTO;

export interface IEditFormBranch {
  isOpen: boolean;
  data?: ICreateTaskParams | IUpdateTaskParams;
}

export enum ETaskBranchStatus {
  Init = 'init',
  CollectionFetching = 'collectionFetching',
  CollectionFetched = 'collectionFetched',
  TaskCreating = 'taskCreating',
  TaskCreated = 'taskCreated',
  TaskUpdating = 'taskUpdating',
  TaskUpdated = 'taskUpdated',
  TaskRemoving = 'taskRemoving',
  TaskRemoved = 'taskRemoved',
}
