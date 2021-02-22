export interface IGetTaskCollectionByProjectParams {
  projectId: string;
}

export interface IGetTaskCollectionByTagParams {
  tagId: string;
}

export interface IGetTaskCollectionByFilterParams {
  filterId: string;
}

export interface IGetTaskCollectionByDateParams {
  date: number;
}

export type IGetTaskCollectionParams =
  | IGetTaskCollectionByProjectParams
  | IGetTaskCollectionByTagParams
  | IGetTaskCollectionByFilterParams
  | IGetTaskCollectionByDateParams;

export const isByProjectParams = (
  value: IGetTaskCollectionParams
): value is IGetTaskCollectionByProjectParams =>
  typeof (value as IGetTaskCollectionByProjectParams).projectId !== 'undefined';

export const isByDateParams = (
  value: IGetTaskCollectionParams
): value is IGetTaskCollectionByDateParams =>
  typeof (value as IGetTaskCollectionByDateParams).date !== 'undefined';

export interface ICreateTaskParams {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: number;
}
