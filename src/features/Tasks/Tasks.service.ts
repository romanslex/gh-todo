import { doWithDelay } from 'rml-back-mock-helper';
import { tasksController } from 'backend/features/Tasks.controller';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import { IGetTaskCollectionParams } from 'common/models/IGetTaskCollectionParams';
import { ITaskDTO } from 'common/models/TaskDTO';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';
import { IChangeTaskDoneStatusParams } from 'common/models/IChangeTaskDoneStatusParams';

export const tasksService = {
  create(data: ICreateTaskParams) {
    return doWithDelay(() => {
      tasksController.create(data);
    }, 500);
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

  remove(id: string) {
    return doWithDelay(() => {
      tasksController.remove(id);
    });
  },

  changeDoneStatus(data: IChangeTaskDoneStatusParams): Promise<ITaskDTO> {
    return doWithDelay(() => {
      return tasksController.changeDoneStatus(data);
    });
  },
};
