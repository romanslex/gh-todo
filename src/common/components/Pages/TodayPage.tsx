import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { DateHelper } from 'common/Helpers/Date.helpers';
import { TaskItem } from 'features/Tasks/components/TaskItem';

export const TodayPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);
  const today = DateHelper.getTodayDateString();

  useEffect(() => {
    dispatch(
      tasksActions.getCollection.try({ startDate: today, endDate: today })
    );
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
