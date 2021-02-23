import React from 'react';
import Button from 'antd/es/button';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import { useDispatch } from 'react-redux';
import { tasksActions } from 'features/Tasks/Tasks.slice';

export const AddTaskButton: React.FC = () => {
  const dispatch = useDispatch();
  const openEditForm = () =>
    dispatch(tasksActions.toggleEditForm({ isOpen: true }));

  return (
    <Button type="link" icon={<PlusCircleOutlined />} onClick={openEditForm}>
      Add task
    </Button>
  );
};
