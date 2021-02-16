import {
  ICreateProjectModel,
  IProjectModel,
} from 'features/Projects/Projects.models';
import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';
import {
  EProjectColor,
  IBackendProjectModel,
} from 'features/Projects/backend/Projects.models';

const key = 'projects';

const inboxProject: IBackendProjectModel = {
  id: v4(),
  color: EProjectColor.Blue,
  name: 'Inbox',
  isInbox: true,
};

export const projectsBackend = {
  createDefaultInboxProject() {
    const projects = localStorageService.getCollection<IBackendProjectModel>(
      key
    );
    if (!Object.values(projects).some((project) => project.isInbox)) {
      localStorageService.add(key, inboxProject);
    }
  },

  create(data: ICreateProjectModel): void {
    const project: IBackendProjectModel = {
      id: v4(),
      ...data,
      isInbox: false,
    };
    localStorageService.add(key, project);
  },

  getCollection(): IProjectModel[] {
    return Object.values(localStorageService.getCollection(key));
  },

  remove(id: string): void {
    localStorageService.remove(key, id);
  },

  update(data: IProjectModel): void {
    localStorageService.update(key, data);
  },
};
