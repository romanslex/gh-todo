export interface IProjectsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
  collection: IProjectModel[];
}

export interface IProjectModel {
  id: string;
  name: string;
  color: EProjectColor;
}

export interface ICreateProjectModel {
  name: string;
  color: EProjectColor;
}

export enum EProjectColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Cyan = 'cyan',
  Blue = 'blue',
  Magenta = 'magenta',
  Purple = 'purple',
}
