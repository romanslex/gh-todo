import { ICreateTagModel } from 'features/Tags/Tags.models';
import { doWithDelay } from 'rml-back-mock-helper';
import { tagsBackend } from 'features/Tags/Tags.backend';

export const tagsService = {
  create(data: ICreateTagModel) {
    return doWithDelay(() => {
      tagsBackend.create(data);
    });
  },
};
