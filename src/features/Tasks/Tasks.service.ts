import { doWithDelay } from 'rml-back-mock-helper';
import { tasksController } from 'backend/features/Tasks/Tasks.controller';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IGetTaskCollectionParams } from 'common/models/IGetTaskCollectionParams';
import { ITaskDTO } from 'common/models/TaskDTO';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';

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

  update(data: IUpdateTaskParams) {
    return doWithDelay(() => {
      tasksController.update(data);
    });
  },
};
