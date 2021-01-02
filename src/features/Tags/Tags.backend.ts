import { ICreateTagModel, ITagModel } from 'features/Tags/Tags.models';
import { v4 } from 'uuid';
import { localStorageService } from 'rml-back-mock-helper';

const key = 'tags';

export const tagsBackend = {
  create(data: ICreateTagModel): void {
    const tag = {
      id: v4(),
      ...data,
    };
    localStorageService.add(key, tag);
  },

  getCollection(): ITagModel[] {
    return Object.values(localStorageService.getCollection(key));
  },
};
