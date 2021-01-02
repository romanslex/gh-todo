import React from 'react';
import { AppModal } from 'common/components/AppModal';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { ColorPicker } from 'common/components/ColorPicker';
import { EProjectColor } from 'features/Projects/Projects.models';

interface IFormValues {
  name: string;
  color: EProjectColor;
}

export const EditProjectModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(projectsSelectors.getIsEditModalOpen);
  const isLoading = useSelector(projectsSelectors.getIsLoading);

  const close = () => dispatch(projectsActions.toggleEditModal(false));
  const finish = (values: IFormValues) => {
    dispatch(projectsActions.create.try(values));
  };

  return (
    <AppModal title="Create new project" isOpen={isOpen} close={close}>
      <Form layout="vertical" onFinish={finish}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Field is required' }]}
        >
          <Input disabled={isLoading} />
        </Form.Item>
        <Form.Item label="Color" name="color">
          <ColorPicker disabled={isLoading} />
        </Form.Item>
        <div className="d-flex d-flex_justify--end">
          <Form.Item className="mr-2 mb-0">
            <Button htmlType="submit" type="primary" loading={isLoading}>
              Save
            </Button>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button onClick={close} disabled={isLoading}>
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
    </AppModal>
  );
};
