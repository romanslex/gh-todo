import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { RouteComponentProps } from 'react-router-dom';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';
import { TasksLayout } from 'common/components/Layouts/TasksLayout';
import { ProjectsHooks } from 'features/Projects/Projects.hooks';

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
  const isLoading = useSelector(tasksSelectors.getIsLoading);
  const project = ProjectsHooks.useCurrentProject(id);

  useEffect(() => {
    id && dispatch(tasksActions.getCollection.try({ projectId: id }));
  }, [dispatch, id]);

  TasksHooks.useCollectionRefetch({ projectId: id });

  return (
    <TasksLayout
      tasks={tasks}
      title={project?.name || "Project doesn't exist"}
      isLoading={isLoading}
      editFormData={{ project: id }}
    />
  );
};
