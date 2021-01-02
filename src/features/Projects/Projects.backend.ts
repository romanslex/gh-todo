import { ICreateProjectModel } from 'features/Projects/Projects.models';
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
};
