import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { TaskItem } from 'features/Tasks/components/TaskItem';

type IComponentProps = RouteComponentProps<{ id: string }>;

export const FilterPage: React.FC<IComponentProps> = (
  props: IComponentProps
) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);

  useEffect(() => {
    id && dispatch(tasksActions.getCollection.try({ filterId: id }));
  }, [dispatch, id]);

  return (
    <div>
      Filter page
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
