export interface IFiltersSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
}

export interface ICreateFilterModel {
  name: string;
  query: string;
}
