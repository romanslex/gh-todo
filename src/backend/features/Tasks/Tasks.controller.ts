import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { Task, TaskTag } from 'backend/models/Task';
import { ITaskDTO } from 'common/models/dtos';
import {
  ICreateTaskParams,
  IGetTaskCollectionParams,
  isByProjectParams,
} from 'common/models/requestsModels';
import { Tag } from 'backend/models/Tag';
import { Project } from 'backend/models/Project';

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

    const tags = localStorageService.getCollection<Tag>(tagsKey);
    const taskTagCollection = Object.values(
      localStorageService.getCollection<TaskTag>(taskTagKey)
    );
    const projects = localStorageService.getCollection<Project>(projectsKey);

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
};
