import {
  ICreateFilterModel,
  IFilterModel,
} from 'features/Filters/Filters.models';
import { v4 } from 'uuid';
import { localStorageService } from 'rml-back-mock-helper';

const key = 'filters';

export const filtersBackend = {
  create(data: ICreateFilterModel): void {
    const filter = {
      id: v4(),
      ...data,
    };
    localStorageService.add(key, filter);
  },

  getCollection(): IFilterModel[] {
    return Object.values(localStorageService.getCollection(key));
  },
};
