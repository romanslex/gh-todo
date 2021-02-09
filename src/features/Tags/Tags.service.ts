import { ICreateTagModel, ITagModel } from 'features/Tags/Tags.models';
import { doWithDelay } from 'rml-back-mock-helper';
import { tagsBackend } from 'features/Tags/Tags.backend';

export const tagsService = {
  create(data: ICreateTagModel) {
    return doWithDelay(() => {
      tagsBackend.create(data);
    });
  },

  getCollection(): Promise<ITagModel[]> {
    return doWithDelay(() => {
      return tagsBackend.getCollection();
    });
  },

  remove(id: string) {
    return doWithDelay(() => {
      tagsBackend.remove(id);
    });
  },
};
