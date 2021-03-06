import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { TasksHooks } from 'features/Tasks/Tasks.hooks';
import { TasksLayout } from 'common/components/Layouts/TasksLayout';

export const InboxPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getInboxTasks);
  const inboxProject = useSelector(projectsSelectors.getInboxProject);
  const isLoading = useSelector(tasksSelectors.getIsLoading);

  useEffect(() => {
    inboxProject &&
      dispatch(tasksActions.getCollection.try({ projectId: inboxProject.id }));
  }, [inboxProject, dispatch]);

  TasksHooks.useCollectionRefetch(
    inboxProject && { projectId: inboxProject.id }
  );

  if (!inboxProject) {
    return null;
  }

  return (
    <TasksLayout
      isLoading={isLoading}
      tasks={tasks}
      title="Inbox page"
      editFormData={{ project: inboxProject.id }}
    />
  );
};
