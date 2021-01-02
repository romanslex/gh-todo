export interface IProjectsSlice {
  isEditModalOpen: boolean;
  isLoading: boolean;
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
