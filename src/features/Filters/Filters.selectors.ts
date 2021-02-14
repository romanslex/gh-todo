import { IFilterModel, IFiltersSlice } from 'features/Filters/Filters.models';

type State = { filters: IFiltersSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.filters.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.filters.isLoading;

const getCollection = (state: State): IFilterModel[] =>
  state.filters.collection;

const getEditFilterData = (state: State): IFilterModel | undefined =>
  state.filters.editFilterData;

export const filtersSelectors = {
  getIsEditModalOpen,
  getIsLoading,
  getCollection,
  getEditFilterData,
};
