import {
  ICreateTagParams,
  isCreateTagParams,
} from 'common/models/ICreateTagParams';

export interface IUpdateTagParams extends ICreateTagParams {
  id: string;
}

export const isUpdateTagParams = (value: unknown): value is IUpdateTagParams =>
  isCreateTagParams(value) &&
  typeof (value as IUpdateTagParams)?.id !== 'undefined';
