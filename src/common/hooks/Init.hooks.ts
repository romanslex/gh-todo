import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { projectsActions } from 'features/Projects/Projects.slice';

export function useInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsActions.getCollection.try());
  }, [dispatch]);
}
