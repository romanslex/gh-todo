export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
}

export interface ITaskModel {
  id: string;
  name: string;
  dueDate: number;
}

export type ICreateTaskModel = Partial<Omit<ITaskModel, 'id'>>;
