import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { ICreateTaskModel } from 'features/Tasks/Tasks.models';

const key = 'tasks';

export const tasksBackend = {
  create(data: ICreateTaskModel): void {
    const task = {
      id: v4(),
      ...data,
    };
    localStorageService.add(key, task);
  },
};
