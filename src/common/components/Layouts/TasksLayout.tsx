import React from 'react';
import { TaskItem } from 'features/Tasks/components/TaskItem';
import { AddTaskButton } from 'features/Tasks/components/AddTaskButton';
import { ITaskModel } from 'features/Tasks/Tasks.models';

interface IComponentProps {
  tasks: ITaskModel[];
  title: string;
}

export const TasksLayout: React.FC<IComponentProps> = (
  props: IComponentProps
) => {
  const { title, tasks } = props;

  return (
    <>
      <h1 className="mb-4">{title}</h1>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <div>
        <AddTaskButton />
      </div>
    </>
  );
};
