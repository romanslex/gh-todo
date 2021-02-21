import { ITaskDTO } from 'common/models/dtos';

export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
}

export type ITaskModel = ITaskDTO;
