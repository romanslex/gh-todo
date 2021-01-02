export interface ITagsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: ITagModel[];
}

export interface ICreateTagModel {
  name: string;
}

export interface ITagModel {
  id: string;
  name: string;
}
