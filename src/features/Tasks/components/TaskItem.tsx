import React from 'react';
import { ITaskModel } from 'features/Tasks/Tasks.models';
import { Col, Row } from 'antd/es/grid';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { ColorCircle } from 'common/components/ColorCircle';

interface IComponentProps {
  task: ITaskModel;
}

export const TaskItem: React.FC<IComponentProps> = ({
  task,
}: IComponentProps) => {
  const { name, project } = task;

  return (
    <Row gutter={[12, 0]}>
      <Col>
        <Checkbox />
      </Col>
      <Col flex={1}>{name}</Col>
      <Col>
        {project.name}{' '}
        <ColorCircle width="10px" height="10px" color={project.color} />
      </Col>
    </Row>
  );
};
