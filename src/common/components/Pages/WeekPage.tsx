import React, { useEffect, useMemo } from 'react';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import moment from 'moment';
import { DateHelper } from 'common/Helpers/Date.helpers';
import { AddTaskButton } from 'features/Tasks/components/AddTaskButton';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';

export const WeekPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);
  const startDate = useMemo(() => moment(), []);
  const endDate = useMemo(() => moment().add(7, 'days'), []);

  useEffect(() => {
    dispatch(
      tasksActions.getCollection.try({
        startDate: DateHelper.mapMomentToString(startDate),
        endDate: DateHelper.mapMomentToString(endDate),
      })
    );
  }, [dispatch, startDate, endDate]);

  TasksHooks.useCollectionRefetch({
    startDate: DateHelper.mapMomentToString(startDate),
    endDate: DateHelper.mapMomentToString(endDate),
  });

  return (
    <div>
      Week page
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <AddTaskButton />
    </div>
  );
};
