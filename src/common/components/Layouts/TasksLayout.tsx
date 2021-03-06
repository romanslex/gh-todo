import React from 'react';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { AddTaskButton } from 'features/Tasks/components/AddTaskButton';
import { ITaskModel } from 'features/Tasks/Tasks.models';
import { Loader } from 'common/components/Loader';

interface IComponentProps {
  tasks: ITaskModel[];
  title: string;
  isLoading: boolean;
}

export const TasksLayout: React.FC<IComponentProps> = (
  props: IComponentProps
) => {
  const { title, tasks, isLoading } = props;
  const hasCompletedTasks = tasks.some((task) => task.isDone);

  return (
    <>
      <h1 className="mb-4">{title}</h1>
      {tasks
        .filter((task) => !task.isDone)
        .map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

      {isLoading && <Loader />}
      <div>
        <AddTaskButton />
      </div>

      {hasCompletedTasks && (
        <>
          <div className="mt-8">Completed tasks</div>
          {tasks
            .filter((task) => task.isDone)
            .map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
        </>
      )}
    </>
  );
};
