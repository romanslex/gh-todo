import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { ETaskBranchStatus } from 'features/Tasks/Tasks.models';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { IGetTaskCollectionParams } from 'common/models/IGetTaskCollectionParams';

const useCollectionRefetch = (payload?: IGetTaskCollectionParams) => {
  const tasksBranchStatus = useSelector(tasksSelectors.getStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      payload &&
      (tasksBranchStatus === ETaskBranchStatus.TaskUpdated ||
        tasksBranchStatus === ETaskBranchStatus.TaskCreated ||
        tasksBranchStatus === ETaskBranchStatus.TaskRemoved)
    ) {
      dispatch(tasksActions.getCollection.try(payload));
    }
  });
};

export const TasksHooks = {
  useCollectionRefetch,
};
