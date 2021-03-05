import {
  ICreateProjectParams,
  isCreateProjectParams,
} from 'common/models/ICreateProjectParams';

export interface IUpdateProjectParams extends ICreateProjectParams {
  id: string;
}

export const isUpdateProjectParams = (
  value: unknown
): value is IUpdateProjectParams =>
  isCreateProjectParams(value) &&
  typeof (value as IUpdateProjectParams)?.id !== 'undefined';
