import moment, { Moment } from 'moment';

export const DATE_DISPLAY_FORMAT = 'DD.MM.YYYY';

export const momentToNumber = (date?: Moment): number | undefined => {
  return date?.unix();
};

export const formatDateNumber = (date: number): string =>
  moment.unix(date).format(DATE_DISPLAY_FORMAT);

export const mapMomentToString = (date: Moment): string =>
  formatDateNumber(date.unix());

const getTodayDateString = (): string => moment().format(DATE_DISPLAY_FORMAT);

const mapStringToMoment = (
  date: string,
  format: string = DATE_DISPLAY_FORMAT
): Moment => moment(date, format);

const mapNumberToMoment = (date: number): Moment => moment.unix(date);

export const DateHelper = {
  mapStringToMoment,
  mapNumberToMoment,
  getTodayDateString,
};
