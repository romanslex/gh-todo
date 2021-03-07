import React, { CSSProperties } from 'react';
import { ITaskModel } from 'features/Tasks/Tasks.models';
import { Col, Row } from 'antd/es/grid';
import Checkbox from 'antd/es/checkbox/Checkbox';
import { ColorCircle } from 'common/components/ColorCircle';
import { DateHelper } from 'common/Helpers/Date.helpers';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import Card from 'antd/es/card';
import { useDispatch } from 'react-redux';
import { tasksActions } from 'features/Tasks/Tasks.slice';

const cardBodyStyles: CSSProperties = {
  padding: '5px 10px',
};

interface IComponentProps {
  task: ITaskModel;
}

export const TaskItem: React.FC<IComponentProps> = ({
  task,
}: IComponentProps) => {
  const { id, name, project, dueDate, tags, isDone } = task;
  const dispatch = useDispatch();
  const hasTags = tags && tags?.length > 0;

  const editTask = () =>
    dispatch(
      tasksActions.toggleEditForm({
        isOpen: true,
        data: {
          id,
          name,
          dueDate,
          isDone,
          project: project.id,
          tags: tags?.map((tag) => tag.id),
        },
      })
    );

  const changeDoneStatus = () =>
    dispatch(tasksActions.changeDoneStatus.try({ id, isDone: !isDone }));

  return (
    <Card bodyStyle={cardBodyStyles} className="mb-3">
      <Row gutter={[12, 0]} wrap={false}>
        <Col>
          <Checkbox onClick={changeDoneStatus} checked={isDone} />
        </Col>
        <Col flex={1}>
          <Row>
            <Col className="cursor-pointer" flex={1} onClick={editTask}>
              <span
                style={isDone ? { textDecoration: 'line-through' } : undefined}
              >
                {name}
              </span>
            </Col>
            <Col>
              <Row align="middle" gutter={[6, 0]} wrap={false}>
                <Col className="fs-xs">{project.name}</Col>
                <Col>
                  <ColorCircle
                    width="10px"
                    height="10px"
                    color={project.color}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              {dueDate && (
                <>
                  <CalendarOutlined className="mr-1 c-danger" />
                  <span className="mr-2 fs-xs c-danger">
                    {DateHelper.mapNumberToString(dueDate)}
                  </span>
                </>
              )}
            </Col>
            <Col>
              {hasTags && (
                <Row gutter={[12, 0]}>
                  {tags?.map((tag) => (
                    <Col
                      style={{ wordBreak: 'break-all' }}
                      className={`fs-xs c-pr-${tag.color}`}
                      key={tag.id}
                    >
                      {tag.name}
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
