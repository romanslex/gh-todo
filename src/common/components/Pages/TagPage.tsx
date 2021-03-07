import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { RouteComponentProps } from 'react-router-dom';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';
import { TasksLayout } from 'common/components/Layouts/TasksLayout';
import { TagsHooks } from 'features/Tags/Tags.hooks';

type IComponentProps = RouteComponentProps<{ id: string }>;

export const TagPage: React.FC<IComponentProps> = (props: IComponentProps) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getCollection);
  const isLoading = useSelector(tasksSelectors.getIsLoading);
  const tag = TagsHooks.useCurrentTag(id);

  useEffect(() => {
    id && dispatch(tasksActions.getCollection.try({ tagId: id }));
  }, [dispatch, id]);

  TasksHooks.useCollectionRefetch({ tagId: id });

  return (
    <TasksLayout
      tasks={tasks}
      title={tag?.name || 'Tags page'}
      isLoading={isLoading}
      editFormData={{ tags: [id] }}
    />
  );
};
