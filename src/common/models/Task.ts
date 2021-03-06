export interface Task {
  id: string;
  name: string;
  dueDate?: number;
  project: string;
  isDone: boolean;
}

export interface TaskTag {
  id: string;
  taskId: string;
  tagId: string;
}
