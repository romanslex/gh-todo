import { EColor } from 'common/models/EColor';

export interface ICreateTagParams {
  name: string;
  color: EColor;
}

export const isCreateTagParams = (value: unknown): value is ICreateTagParams =>
  typeof (value as ICreateTagParams)?.name !== 'undefined' &&
  typeof (value as ICreateTagParams)?.color !== 'undefined';
