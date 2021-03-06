import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { Task, TaskTag } from 'common/models/Task';
import { Tag } from 'common/models/Tag';
import { Project } from 'common/models/Project';
import { DateHelper } from 'common/Helpers/Date.helpers';
import { ICreateTaskParams } from 'common/models/ICreateTaskParams';
import {
  IGetTaskCollectionParams,
  isByDateParams,
  isByProjectParams,
  isByTagParams,
} from 'common/models/IGetTaskCollectionParams';
import { ITaskDTO } from 'common/models/TaskDTO';
import { IUpdateTaskParams } from 'common/models/IUpdateTaskParams';
import { IChangeTaskDoneStatusParams } from 'common/models/IChangeTaskDoneStatusParams';

const tasksKey = 'tasks';
const taskTagKey = 'task_tag';
const tagsKey = 'tags';
const projectsKey = 'projects';

export const tasksController = {
  create(data: ICreateTaskParams): void {
    const { name, project, tags, dueDate, isDone } = data;
    const taskId = v4();
    const task: Task = {
      id: taskId,
      name,
      dueDate,
      project,
      isDone,
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
      isDone: task.isDone,
      project: projects[task.project],
      tags: taskTagCollection
        .filter((item) => item.taskId === task.id)
        .map((item) => tags[item.tagId]),
    }));
  },

  update(data: IUpdateTaskParams) {
    const { id, name, project, tags, dueDate, isDone } = data;
    const task: Task = {
      id,
      name,
      dueDate,
      project,
      isDone,
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

  remove(id: string) {
    const taskTags = Object.values(
      localStorageService.getCollection<TaskTag>(taskTagKey)
    );

    localStorageService.remove(tasksKey, id);
    taskTags.map((item) => localStorageService.remove(taskTagKey, item.id));
  },

  changeDoneStatus({ id, isDone }: IChangeTaskDoneStatusParams): ITaskDTO {
    const task = localStorageService.get<Task>(tasksKey, id);
    task.isDone = isDone;
    localStorageService.update(tasksKey, task);

    const project = localStorageService.get<Project>(projectsKey, task.project);
    const taskTags = Object.values(
      localStorageService.getCollection<TaskTag>(taskTagKey)
    );
    const tags = taskTags
      .filter((item) => item.taskId === id)
      .map((item) => localStorageService.get<Tag>(tagsKey, item.tagId));

    return {
      id,
      isDone,
      project,
      tags,
      dueDate: task.dueDate,
      name: task.name,
    };
  },
};
