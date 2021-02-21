import { Project } from 'backend/models/Project';
import { Tag } from 'backend/models/Tag';

export interface ITaskDTO {
  id: string;
  name: string;
  dueDate?: number;
  project: Project;
  tags?: Tag[];
}
