import React, { memo } from 'react';
import { Col, Row } from 'antd/es/grid';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

interface IComponentProps {
  title: string;
  onAdd: () => void;
  icon: React.ReactNode;
}

const SubMenuItemWithAddBtnComponent: React.FC<IComponentProps> = ({
  title,
  onAdd,
  icon,
}: IComponentProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd();
  };

  return (
    <Row>
      <Col>{icon}</Col>
      <Col flex={1}>{title}</Col>
      <Col>
        <PlusOutlined onClick={handleClick} />
      </Col>
    </Row>
  );
};

export const SubMenuItemWithAddBtn = memo(SubMenuItemWithAddBtnComponent);
