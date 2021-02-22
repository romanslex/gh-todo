import moment, { Moment } from 'moment';

export const DATE_DISPLAY_FORMAT = 'DD.MM.YYYY';

const mapMomentToString = (date: Moment): string =>
  date.format(DATE_DISPLAY_FORMAT);

const getTodayDateString = (): string => moment().format(DATE_DISPLAY_FORMAT);

const mapStringToMoment = (
  date: string,
  format: string = DATE_DISPLAY_FORMAT
): Moment => moment(date, format);

const mapNumberToMoment = (date: number): Moment => moment.unix(date);

const mapMomentToNumber = (date: Moment): number => date.unix();

const mapNumberToString = (date: number): string =>
  mapMomentToString(mapNumberToMoment(date));

export const DateHelper = {
  mapStringToMoment,
  mapNumberToMoment,
  getTodayDateString,
  mapMomentToNumber,
  mapNumberToString,
  mapMomentToString,
};
