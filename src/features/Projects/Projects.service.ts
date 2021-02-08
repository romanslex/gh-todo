import { doWithDelay } from 'rml-back-mock-helper';
import { ICreateProjectModel } from 'features/Projects/Projects.models';
import { projectsBackend } from 'features/Projects/Projects.backend';

export const projectsService = {
  create(data: ICreateProjectModel) {
    return doWithDelay(() => {
      projectsBackend.create(data);
    }, 5000);
  },

  getCollection() {
    return doWithDelay(() => {
      return projectsBackend.getCollection();
    });
  },

  remove(id: string) {
    return doWithDelay(() => {
      projectsBackend.remove(id);
    });
  },
};
