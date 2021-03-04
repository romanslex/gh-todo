import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import { EProjectColor, Project } from 'common/models/Project';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';
import { Task } from 'common/models/Task';
import { tasksController } from 'backend/features/Tasks.controller';

const key = 'projects';
const tasksKey = 'tasks';

const inboxProject: Project = {
  id: v4(),
  color: EProjectColor.Blue,
  name: 'Inbox',
  isInbox: true,
};

export const projectsController = {
  createDefaultInboxProject() {
    const projects = localStorageService.getCollection<Project>(key);
    if (!Object.values(projects).some((project) => project.isInbox)) {
      localStorageService.add(key, inboxProject);
    }
  },

  create(data: ICreateProjectParams): void {
    const project: Project = {
      id: v4(),
      ...data,
      isInbox: false,
    };
    localStorageService.add(key, project);
  },

  getCollection(): Project[] {
    return Object.values(localStorageService.getCollection(key));
  },

  remove(id: string): void {
    const tasks = Object.values(
      localStorageService.getCollection<Task>(tasksKey)
    );
    tasks
      .filter((task) => task.project === id)
      .forEach((task) => tasksController.remove(task.id));
    localStorageService.remove(key, id);
  },

  update(data: Project): void {
    localStorageService.update(key, data);
  },
};
