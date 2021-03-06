import { assertUnreachable } from 'common/Helpers/Common.helpers';

export enum EColor {
  Red = 'red',
  Orange = 'orange',
  Yellow = 'yellow',
  Green = 'green',
  Cyan = 'cyan',
  Blue = 'blue',
  Magenta = 'magenta',
  Purple = 'purple',
}

export const getColorValue = (color: EColor): string => {
  switch (color) {
    case EColor.Red:
      return '#cf1322';
    case EColor.Orange:
      return '#fa8c16';
    case EColor.Yellow:
      return '#ffec3d';
    case EColor.Green:
      return '#389e0d';
    case EColor.Cyan:
      return '#13c2c2';
    case EColor.Blue:
      return '#096dd9';
    case EColor.Magenta:
      return '#9e1068';
    case EColor.Purple:
      return '#531dab';
  }

  assertUnreachable(color);
  return '';
};
