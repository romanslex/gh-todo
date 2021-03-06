import React from 'react';
import { AppModal } from 'common/components/AppModal';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { ColorPicker } from 'common/components/ColorPicker';
import { EColor } from 'common/models/EColor';
import { isUpdateProjectParams } from 'common/models/IUpdateProjectParams';

interface IFormValues {
  name: string;
  color: EColor;
}

export const EditProjectModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(projectsSelectors.getIsEditModalOpen);
  const isLoading = useSelector(projectsSelectors.getIsLoading);
  const editProject = useSelector(projectsSelectors.getEditProjectData);
  const isUpdateForm = isUpdateProjectParams(editProject);
  const title = isUpdateForm ? 'Edit project' : 'Create new project';

  const fields = [
    {
      name: 'name',
      value: editProject?.name,
    },
    {
      name: 'color',
      value: editProject?.color || EColor.Red,
    },
  ];

  const close = () =>
    dispatch(projectsActions.toggleEditModal({ isOpen: false }));
  const finish = (values: IFormValues) => {
    if (isUpdateProjectParams(editProject)) {
      dispatch(projectsActions.update.try({ ...editProject, ...values }));
    } else {
      dispatch(projectsActions.create.try(values));
    }
  };

  return (
    <AppModal title={title} isOpen={isOpen} close={close}>
      <Form
        layout="vertical"
        onFinish={finish}
        autoComplete="off"
        fields={fields}
      >
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
