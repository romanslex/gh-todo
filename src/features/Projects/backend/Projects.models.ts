export interface IBackendProjectModel {
  id: string;
  name: string;
  color: EProjectColor;
  isInbox: boolean;
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
