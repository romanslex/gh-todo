import { useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { useMemo } from 'react';
import { IProjectModel } from 'features/Projects/Projects.models';

const useCurrentProject = (id: string): IProjectModel | undefined => {
  const projectsCollection = useSelector(projectsSelectors.getCollection);
  return useMemo(() => projectsCollection.find((item) => item.id === id), [
    projectsCollection,
    id,
  ]);
};

export const ProjectsHooks = {
  useCurrentProject,
};
