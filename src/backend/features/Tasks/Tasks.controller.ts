import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { Task, TaskTag } from 'backend/models/Task';
import { ITaskDTO } from 'common/models/dtos';
import {
  ICreateTaskParams,
  IGetTaskCollectionParams,
  isByDateParams,
  isByProjectParams,
  isByTagParams,
  IUpdateTaskParams,
} from 'common/models/requestsModels';
import { Tag } from 'backend/models/Tag';
import { Project } from 'backend/models/Project';
import { DateHelper } from 'common/Helpers/Date.helpers';

const tasksKey = 'tasks';
const taskTagKey = 'task_tag';
const tagsKey = 'tags';
const projectsKey = 'projects';

export const tasksController = {
  create(data: ICreateTaskParams): void {
    const { name, project, tags, dueDate } = data;
    const taskId = v4();
    const task: Task = {
      id: taskId,
      name,
      dueDate,
      project,
    };
    localStorageService.add(tasksKey, task);

    tags?.forEach((tagId) => {
      localStorageService.add<TaskTag>(taskTagKey, {
        id: v4(),
        tagId,
        taskId,
      });
    });
  },

  getCollection(data: IGetTaskCollectionParams): ITaskDTO[] {
    let tasks = Object.values(
      localStorageService.getCollection<Task>(tasksKey)
    );

    if (isByProjectParams(data)) {
      tasks = tasks.filter((task) => task.project === data.projectId);
    }

    if (isByDateParams(data)) {
      tasks = tasks.filter((task) => {
        if (!task?.dueDate) return false;
        const dueDate = DateHelper.mapNumberToMoment(task.dueDate);
        const startDate = DateHelper.mapStringToMoment(data.startDate);
        const endDate = DateHelper.mapStringToMoment(data.endDate);
        return dueDate.isBetween(startDate, endDate, 'day', '[]');
      });
    }

    const tags = localStorageService.getCollection<Tag>(tagsKey);
    const taskTagCollection = Object.values(
      localStorageService.getCollection<TaskTag>(taskTagKey)
    );
    const projects = localStorageService.getCollection<Project>(projectsKey);

    if (isByTagParams(data)) {
      const neededTasksIds = taskTagCollection
        .filter((item) => item.tagId === data.tagId)
        .map((item) => item.taskId);
      tasks = tasks.filter((task) => neededTasksIds.includes(task.id));
    }

    return tasks.map((task) => ({
      id: task.id,
      name: task.name,
      dueDate: task.dueDate,
      project: projects[task.project],
      tags: taskTagCollection
        .filter((item) => item.taskId === task.id)
        .map((item) => tags[item.tagId]),
    }));
  },

  update(data: IUpdateTaskParams) {
    const { id, name, project, tags, dueDate } = data;
    const task: Task = {
      id,
      name,
      dueDate,
      project,
    };
    localStorageService.update(tasksKey, task);

    Object.values(localStorageService.getCollection<TaskTag>(taskTagKey))
      .filter((item) => item.taskId === id)
      .forEach((item) => localStorageService.remove(taskTagKey, item.id));

    tags?.forEach((tagId) => {
      localStorageService.add<TaskTag>(taskTagKey, {
        tagId,
        id: v4(),
        taskId: id,
      });
    });
  },
};
