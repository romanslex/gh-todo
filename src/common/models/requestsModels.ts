export interface IGetTaskCollectionByProjectParams {
  projectId: string;
}

export interface IGetTaskCollectionByTagParams {
  tagId: string;
}

export interface IGetTaskCollectionByFilterParams {
  filterId: string;
}

export type IGetTaskCollectionParams =
  | IGetTaskCollectionByProjectParams
  | IGetTaskCollectionByTagParams
  | IGetTaskCollectionByFilterParams;

export const isByProjectParams = (
  value: any
): value is IGetTaskCollectionByProjectParams => {
  return typeof value.projectId === 'string';
};

export interface ICreateTaskParams {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: number;
}
