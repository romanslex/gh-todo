import { v4 } from 'uuid';
import { localStorageService } from 'rml-back-mock-helper';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { Tag } from 'common/models/Tag';

const key = 'tags';

export const tagsController = {
  create(data: ICreateTagParams): void {
    const tag = {
      id: v4(),
      ...data,
    };
    localStorageService.add(key, tag);
  },

  getCollection(): Tag[] {
    return Object.values(localStorageService.getCollection(key));
  },

  remove(id: string): void {
    localStorageService.remove(key, id);
  },

  update(data: Tag) {
    localStorageService.update(key, data);
  },
};
