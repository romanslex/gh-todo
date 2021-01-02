import React, { CSSProperties } from 'react';
import { EProjectColor } from 'features/Projects/Projects.models';

const colorItemRadius = 30;
const colorItemStyle: CSSProperties = {
  width: `${colorItemRadius}px`,
  height: `${colorItemRadius}px`,
  borderRadius: '50%',
};
const activeColorItemStyle: CSSProperties = {
  border: '2px solid black',
};

interface IComponentProps {
  value?: EProjectColor;
  disabled?: boolean;
  onChange?: (value: EProjectColor) => void;
}

export const ColorPicker: React.FC<IComponentProps> = ({
  value = EProjectColor.Red,
  onChange,
  disabled,
}: IComponentProps) => {
  return (
    <div className="d-flex d-flex_justify--space-between">
      {Object.values(EProjectColor).map((color) => (
        <div
          key={color}
          onClick={() =>
            !disabled && onChange && onChange(color as EProjectColor)
          }
          style={
            value === color
              ? { ...colorItemStyle, ...activeColorItemStyle }
              : colorItemStyle
          }
          className={`bg-pr-${color} cursor-pointer ${
            disabled ? 'cursor-disabled' : ''
          }`}
        />
      ))}
    </div>
  );
};
