import { ITagModel } from 'features/Tags/Tags.models';
import { doWithDelay } from 'rml-back-mock-helper';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { tagsController } from 'backend/features/Tags.controller';

export const tagsService = {
  create(data: ICreateTagParams) {
    return doWithDelay(() => {
      tagsController.create(data);
    });
  },

  getCollection(): Promise<ITagModel[]> {
    return doWithDelay(() => {
      return tagsController.getCollection();
    });
  },

  remove(id: string) {
    return doWithDelay(() => {
      tagsController.remove(id);
    });
  },

  update(data: ITagModel): Promise<ITagModel> {
    return doWithDelay(() => {
      return tagsController.update(data);
    });
  },
};
