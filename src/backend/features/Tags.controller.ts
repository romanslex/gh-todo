import { v4 } from 'uuid';
import { localStorageService } from 'rml-back-mock-helper';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { Tag } from 'common/models/Tag';
import { TaskTag } from 'common/models/Task';

const key = 'tags';
const taskTagKey = 'task_tag';

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
    const taskTags = Object.values(
      localStorageService.getCollection<TaskTag>(taskTagKey)
    );

    taskTags
      .filter((item) => item.tagId === id)
      .map((item) => localStorageService.remove(taskTagKey, item.id));

    localStorageService.remove(key, id);
  },

  update(data: Tag): Tag {
    localStorageService.update(key, data);
    return data;
  },
};
