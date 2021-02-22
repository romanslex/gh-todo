import React from 'react';
import Button from 'antd/es/button';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';

export const AddTaskButton: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(tasksSelectors.getEditFormIsOpen);
  const openEditForm = () =>
    dispatch(tasksActions.toggleEditForm({ isOpen: true }));

  if (isOpen) {
    return null;
  }

  return (
    <Button type="link" icon={<PlusCircleOutlined />} onClick={openEditForm}>
      Add task
    </Button>
  );
};
