import { EProjectColor } from 'common/models/Project';

export interface ICreateProjectParams {
  name: string;
  color: EProjectColor;
}

export const isCreateProjectParams = (
  value: unknown
): value is ICreateProjectParams =>
  typeof (value as ICreateProjectParams)?.name !== 'undefined' &&
  typeof (value as ICreateProjectParams)?.color !== 'undefined';
