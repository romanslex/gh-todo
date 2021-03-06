import { EColor } from 'common/models/EColor';

export interface Project {
  id: string;
  name: string;
  color: EColor;
  isInbox: boolean;
}
