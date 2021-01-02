import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { projectsActions } from 'features/Projects/Projects.slice';
import { tagsActions } from 'features/Tags/Tags.slice';

export function useInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsActions.getCollection.try());
  }, [dispatch]);

  useEffect(() => {
    dispatch(tagsActions.getCollection.try());
  }, [dispatch]);
}
