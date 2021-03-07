import { doWithDelay } from 'rml-back-mock-helper';
import { IProjectModel } from 'features/Projects/Projects.models';
import { ICreateProjectParams } from 'common/models/ICreateProjectParams';
import { projectsController } from 'backend/features/Projects.controller';

export const projectsService = {
  create(data: ICreateProjectParams) {
    return doWithDelay(() => {
      projectsController.create(data);
    });
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

  update(data: IProjectModel): Promise<IProjectModel> {
    return doWithDelay(() => {
      return projectsController.update(data);
    });
  },

  initInboxProject() {
    projectsController.createDefaultInboxProject();
  },
};
