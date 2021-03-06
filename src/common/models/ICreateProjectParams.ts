import { EColor } from 'common/models/EColor';

export interface ICreateProjectParams {
  name: string;
  color: EColor;
}

export const isCreateProjectParams = (
  value: unknown
): value is ICreateProjectParams =>
  typeof (value as ICreateProjectParams)?.name !== 'undefined' &&
  typeof (value as ICreateProjectParams)?.color !== 'undefined';
