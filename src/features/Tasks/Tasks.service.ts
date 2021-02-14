import { ICreateTaskModel } from 'features/Tasks/Tasks.models';
import { doWithDelay } from 'rml-back-mock-helper';
import { tasksBackend } from 'features/Tasks/Tasks.backend';

export const tasksService = {
  create(data: ICreateTaskModel) {
    return doWithDelay(() => {
      tasksBackend.create(data);
    }, 1000);
  },
};
