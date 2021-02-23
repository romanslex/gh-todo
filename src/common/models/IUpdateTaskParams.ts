import { ICreateTaskParams } from 'common/models/ICreateTaskParams';

export interface IUpdateTaskParams extends ICreateTaskParams {
  id: string;
}
