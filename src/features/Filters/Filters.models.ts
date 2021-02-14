export interface IFiltersSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: IFilterModel[];
  editFilterData?: IFilterModel;
}

export interface ICreateFilterModel {
  name: string;
  query: string;
}

export interface IFilterModel {
  id: string;
  name: string;
  query: string;
}

export interface IToggleEditModalParams {
  isOpen: boolean;
  data?: IFilterModel;
}
