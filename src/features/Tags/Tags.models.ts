import { Tag } from 'common/models/Tag';
import { ICreateTagParams } from 'common/models/ICreateTagParams';
import { IUpdateTagParams } from 'common/models/IUpdateTagParams';

export interface ITagsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: ITagModel[];
  editTagData?: ICreateTagParams | IUpdateTagParams;
}

export type ITagModel = Tag;

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: ITagModel;
}
