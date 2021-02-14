import {
  ICreateProjectModel,
  IProjectModel,
} from 'features/Projects/Projects.models';
import { localStorageService } from 'rml-back-mock-helper';
import { v4 } from 'uuid';

const key = 'projects';

export const projectsBackend = {
  create(data: ICreateProjectModel): void {
    const project = {
      id: v4(),
      ...data,
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
