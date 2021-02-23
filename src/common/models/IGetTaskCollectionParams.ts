export interface IGetTaskCollectionByProjectParams {
  projectId: string;
}

export interface IGetTaskCollectionByTagParams {
  tagId: string;
}

export interface IGetTaskCollectionByDateParams {
  startDate: string;
  endDate: string;
}

export type IGetTaskCollectionParams =
  | IGetTaskCollectionByProjectParams
  | IGetTaskCollectionByTagParams
  | IGetTaskCollectionByDateParams;

export const isByProjectParams = (
  value: IGetTaskCollectionParams
): value is IGetTaskCollectionByProjectParams =>
  typeof (value as IGetTaskCollectionByProjectParams).projectId !== 'undefined';

export const isByDateParams = (
  value: IGetTaskCollectionParams
): value is IGetTaskCollectionByDateParams =>
  typeof (value as IGetTaskCollectionByDateParams).startDate !== 'undefined' &&
  typeof (value as IGetTaskCollectionByDateParams).endDate !== 'undefined';

export const isByTagParams = (
  value: IGetTaskCollectionParams
): value is IGetTaskCollectionByTagParams =>
  typeof (value as IGetTaskCollectionByTagParams).tagId !== 'undefined';
