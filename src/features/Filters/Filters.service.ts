import { ICreateFilterModel } from 'features/Filters/Filters.models';
import { doWithDelay } from 'rml-back-mock-helper';
import { filtersBackend } from 'features/Filters/Filters.backend';

export const filtersService = {
  create(data: ICreateFilterModel) {
    return doWithDelay(() => {
      filtersBackend.create(data);
    });
  },
};
