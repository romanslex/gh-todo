export interface ICreateTaskParams {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: number;
}
