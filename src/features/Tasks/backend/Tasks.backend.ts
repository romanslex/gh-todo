import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { ICreateTaskModel } from 'features/Tasks/Tasks.models';
import {
  IBackendTaskModel,
  IBackendTaskTagModel,
} from 'features/Tasks/backend/Tasks.models';

const tasksKey = 'tasks';
const taskTagKey = 'task_tag';

export const tasksBackend = {
  create(data: ICreateTaskModel): void {
    const { name, project, tags, dueDate } = data;
    const taskId = v4();
    const task: IBackendTaskModel = {
      id: taskId,
      name,
      dueDate,
      project,
    };
    localStorageService.add(tasksKey, task);

    tags?.forEach((tagId) => {
      localStorageService.add<IBackendTaskTagModel>(taskTagKey, {
        id: v4(),
        tagId,
        taskId,
      });
    });
  },
};
