import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { RouteComponentProps } from 'react-router-dom';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { AddTaskButton } from 'features/Tasks/components/AddTaskButton';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';

type IComponentProps = RouteComponentProps<{ id: string }>;

export const TagPage: React.FC<IComponentProps> = (props: IComponentProps) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);

  useEffect(() => {
    id && dispatch(tasksActions.getCollection.try({ tagId: id }));
  }, [dispatch, id]);

  TasksHooks.useCollectionRefetch({ tagId: id });

  return (
    <div>
      Tag page
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <AddTaskButton />
    </div>
  );
};
