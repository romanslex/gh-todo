import {
  ICreateTaskParams,
  isCreateTaskParams,
} from 'common/models/ICreateTaskParams';

export interface IUpdateTaskParams extends ICreateTaskParams {
  id: string;
}

export const isUpdateTaskParams = (
  value: unknown
): value is IUpdateTaskParams =>
  isCreateTaskParams(value) &&
  typeof (value as IUpdateTaskParams)?.id !== 'undefined';
