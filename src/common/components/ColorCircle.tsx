import React, { CSSProperties } from 'react';
import { EColor } from 'common/models/EColor';

interface IComponentProps {
  width: string;
  height: string;
  color: EColor;
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
