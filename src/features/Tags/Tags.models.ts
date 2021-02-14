export interface ITagsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: ITagModel[];
  editTagData?: ITagModel;
}

export interface ICreateTagModel {
  name: string;
}

export interface ITagModel {
  id: string;
  name: string;
}

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: ITagModel;
}
