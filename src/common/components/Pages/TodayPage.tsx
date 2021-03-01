import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { DateHelper } from 'common/Helpers/Date.helpers';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';
import { TasksLayout } from 'common/components/Layouts/TasksLayout';

export const TodayPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);
  const today = DateHelper.getTodayDateString();
  const isLoading = useSelector(tasksSelectors.getIsLoading);

  useEffect(() => {
    dispatch(
      tasksActions.getCollection.try({ startDate: today, endDate: today })
    );
  }, [dispatch, today]);

  TasksHooks.useCollectionRefetch({ startDate: today, endDate: today });

  return <TasksLayout tasks={tasks} title="Today" isLoading={isLoading} />;
};
