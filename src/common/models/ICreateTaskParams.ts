export interface ICreateTaskParams {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: number;
}

export const isCreateTaskParams = (
  value: unknown
): value is ICreateTaskParams =>
  typeof (value as ICreateTaskParams)?.name !== 'undefined' &&
  typeof (value as ICreateTaskParams)?.project !== 'undefined';
