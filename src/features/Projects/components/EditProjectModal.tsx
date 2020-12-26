import React from 'react';
import { AppModal } from 'common/components/AppModal';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';

export const EditProjectModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(projectsSelectors.getIsEditModalOpen);

  const close = () => dispatch(projectsActions.toggleEditModal(false));

  return (
    <AppModal title="Create new project" isOpen={isOpen} close={close}>
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item />
        <div className="d-flex d-flex_justify--end">
          <Form.Item className="mr-2">
            <Button type="primary">Save</Button>
          </Form.Item>
          <Form.Item>
            <Button>Cancel</Button>
          </Form.Item>
        </div>
      </Form>
    </AppModal>
  );
};
