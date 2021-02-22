import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { getTodayDateNumber } from 'common/Helpers/Date.helpers';
import { TaskItem } from 'features/Tasks/components/TaskItem';

export const TodayPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);
  const today = getTodayDateNumber();

  useEffect(() => {
    dispatch(tasksActions.getCollection.try({ date: today }));
  }, [dispatch, today]);

  return (
    <div>
      Today page
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
