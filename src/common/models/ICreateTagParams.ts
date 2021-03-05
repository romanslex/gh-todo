export interface ICreateTagParams {
  name: string;
}

export const isCreateTagParams = (value: unknown): value is ICreateTagParams =>
  typeof (value as ICreateTagParams)?.name !== 'undefined';
