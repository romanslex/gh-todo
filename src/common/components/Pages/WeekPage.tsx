import React, { useEffect } from 'react';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import moment from 'moment';
import { DateHelper } from 'common/Helpers/Date.helpers';

export const WeekPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);

  useEffect(() => {
    const startDate = moment();
    const endDate = moment().add(7, 'days');

    dispatch(
      tasksActions.getCollection.try({
        startDate: DateHelper.mapMomentToString(startDate),
        endDate: DateHelper.mapMomentToString(endDate),
      })
    );
  }, [dispatch]);

  return (
    <div>
      Week page
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
