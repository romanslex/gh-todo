export interface IBackendTaskModel {
  id: string;
  name: string;
  dueDate?: number;
  project: string;
}

export interface IBackendTaskTagModel {
  id: string;
  taskId: string;
  tagId: string;
}
