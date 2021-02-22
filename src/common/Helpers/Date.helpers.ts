import moment, { Moment } from 'moment';

export const DATE_DISPLAY_FORMAT = 'DD.MM.YYYY';

export const momentToNumber = (date?: Moment): number | undefined => {
  return date?.unix();
};

export const formatDateNumber = (date: number): string =>
  moment.unix(date).format(DATE_DISPLAY_FORMAT);

export const getTodayDateNumber = (): number => moment().unix();
