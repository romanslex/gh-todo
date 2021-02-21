import { doWithDelay } from 'rml-back-mock-helper';
import {
  ICreateTaskParams,
  IGetTaskCollectionParams,
} from 'common/models/requestsModels';
import { tasksController } from 'backend/features/Tasks/Tasks.controller';
import { ITaskDTO } from 'common/models/dtos';

export const tasksService = {
  create(data: ICreateTaskParams) {
    return doWithDelay(() => {
      tasksController.create(data);
    }, 1000);
  },

  getCollection(data: IGetTaskCollectionParams): Promise<ITaskDTO[]> {
    return doWithDelay(() => {
      return tasksController.getCollection(data);
    }, 500);
  },
};