import React, { CSSProperties } from 'react';
import { EColor } from 'common/models/EColor';

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
  value?: EColor;
  disabled?: boolean;
  onChange?: (value: EColor) => void;
}

export const ColorPicker: React.FC<IComponentProps> = ({
  value = EColor.Red,
  onChange,
  disabled,
}: IComponentProps) => {
  return (
    <div className="d-flex d-flex_justify--space-between">
      {Object.values(EColor).map((color) => (
        <div
          key={color}
          onClick={() => !disabled && onChange && onChange(color as EColor)}
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
