import React from 'react';
import { AppModal } from 'common/components/AppModal';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';

export const EditProjectModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(projectsSelectors.getIsEditModalOpen);

  const close = () => dispatch(projectsActions.toggleEditModal(false));

  return <AppModal isOpen={isOpen} close={close} />;
};
