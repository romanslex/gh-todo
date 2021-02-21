import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { TaskItem } from 'features/Tasks/components/TaskItem';

export const InboxPage: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksSelectors.getInboxTasks);
  const inboxProject = useSelector(projectsSelectors.getInboxProject);

  useEffect(() => {
    inboxProject &&
      dispatch(tasksActions.getCollection.try({ projectId: inboxProject.id }));
  }, [inboxProject, dispatch]);

  if (!inboxProject) {
    return null;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
