import { Tag } from 'common/models/Tag';

export interface ITagsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: ITagModel[];
  editTagData?: ITagModel;
}

export type ITagModel = Tag;

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: ITagModel;
}
