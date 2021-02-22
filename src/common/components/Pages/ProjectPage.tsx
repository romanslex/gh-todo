import React, { useEffect } from 'react';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { RouteComponentProps } from 'react-router-dom';
import { tasksActions } from 'features/Tasks/Tasks.slice';

type IComponentProps = RouteComponentProps<{ id: string }>;

export const ProjectPage: React.FC<IComponentProps> = (
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
    id && dispatch(tasksActions.getCollection.try({ projectId: id }));
  }, [dispatch, id]);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
