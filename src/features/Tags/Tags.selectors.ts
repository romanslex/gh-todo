import { ITagModel, ITagsSlice } from 'features/Tags/Tags.models';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { IUpdateTagParams } from 'common/models/IUpdateTagParams';

type State = { tags: ITagsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.tags.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.tags.isLoading;

const getCollection = (state: State): ITagModel[] => state.tags.collection;

const getEditTagData = (
  state: State
): ICreateTagParams | IUpdateTagParams | undefined => state.tags.editTagData;

export const tagsSelectors = {
  getIsEditModalOpen,
  getIsLoading,
  getCollection,
  getEditTagData,
};
