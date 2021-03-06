import { Project } from 'common/models/Project';
import { Tag } from 'common/models/Tag';

export interface ITaskDTO {
  id: string;
  name: string;
  dueDate?: number;
  project: Project;
  tags?: Tag[];
  isDone: boolean;
}
