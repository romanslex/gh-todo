import { ITagsSlice } from 'features/Tags/Tags.models';

type State = { tags: ITagsSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.tags.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.tags.isLoading;

export const tagsSelectors = {
  getIsEditModalOpen,
  getIsLoading,
};
