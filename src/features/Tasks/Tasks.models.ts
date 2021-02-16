export interface ITasksSlice {
  isLoading: boolean;
  collection: ITaskModel[];
}

export interface ITaskModel {
  id: string;
  name: string;
  dueDate: number;
}

export interface ICreateTaskModel {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: number;
}
