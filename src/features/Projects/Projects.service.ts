import { doWithDelay } from 'rml-back-mock-helper';
import { IProjectModel } from 'features/Projects/Projects.models';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';
import { projectsController } from 'backend/features/Projects.controller';

export const projectsService = {
  create(data: ICreateProjectParams) {
    return doWithDelay(() => {
      projectsController.create(data);
    }, 5000);
  },

  getCollection() {
    return doWithDelay(() => {
      return projectsController.getCollection();
    });
  },

  remove(id: string) {
    return doWithDelay(() => {
      projectsController.remove(id);
    });
  },

  update(data: IProjectModel) {
    return doWithDelay(() => {
      projectsController.update(data);
    }, 1000);
  },

  initInboxProject() {
    projectsController.createDefaultInboxProject();
  },
};
