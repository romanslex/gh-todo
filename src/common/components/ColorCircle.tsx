import React, { CSSProperties } from 'react';
import { EProjectColor } from 'common/models/Project';

interface IComponentProps {
  width: string;
  height: string;
  color: EProjectColor;
  className?: string;
}

export const ColorCircle: React.FC<IComponentProps> = (
  props: IComponentProps
) => {
  const { width, height, color, className } = props;
  const classes = `bg-pr-${color} ${className}`;
  const circleStyle: CSSProperties = {
    width,
    height,
    borderRadius: '50%',
  };

  return <div style={circleStyle} className={classes} />;
};
