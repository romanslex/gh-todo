import { Moment } from 'moment';

export const DATE_DISPLAY_FORMAT = 'DD.MM.YYYY';

export const momentToNumber = (date?: Moment): number | undefined => {
  return date?.unix();
};
