import { IFiltersSlice } from 'features/Filters/Filters.models';

type State = { filters: IFiltersSlice };

const getIsEditModalOpen = (state: State): boolean =>
  state.filters.isEditModalOpen;

const getIsLoading = (state: State): boolean => state.filters.isLoading;

export const filtersSelectors = {
  getIsEditModalOpen,
  getIsLoading,
};
