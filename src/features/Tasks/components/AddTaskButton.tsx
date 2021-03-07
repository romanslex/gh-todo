import React from 'react';
import Button from 'antd/es/button';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import { useDispatch } from 'react-redux';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { IEditTaskParams } from 'features/Tasks/Tasks.models';

interface IComponentProps {
  editFormData?: IEditTaskParams;
}

export const AddTaskButton: React.FC<IComponentProps> = ({
  editFormData,
}: IComponentProps) => {
  const dispatch = useDispatch();
  const openEditForm = () =>
    dispatch(tasksActions.toggleEditForm({ isOpen: true, data: editFormData }));

  return (
    <Button
      type="link"
      icon={<PlusCircleOutlined />}
      onClick={openEditForm}
      className="pl-0"
    >
      Add task
    </Button>
  );
};
