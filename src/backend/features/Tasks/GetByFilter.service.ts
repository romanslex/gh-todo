import { Filter } from 'backend/models/Filter';
import { Task } from 'backend/models/Task';

export const getByFilter = (filter: Filter, tasks: Task[]): Task[] => {
  return tasks;
};
