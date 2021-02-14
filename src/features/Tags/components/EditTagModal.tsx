import React from 'react';
import { AppModal } from 'common/components/AppModal';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useDispatch, useSelector } from 'react-redux';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import { tagsActions } from 'features/Tags/Tags.slice';

interface IFormValues {
  name: string;
}

export const EditTagModal: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(tagsSelectors.getIsLoading);
  const isOpen = useSelector(tagsSelectors.getIsEditModalOpen);
  const editTag = useSelector(tagsSelectors.getEditTagData);
  const fields = [{ name: 'name', value: editTag?.name }];

  const close = () => dispatch(tagsActions.toggleEditModal({ isOpen: false }));
  const finish = (values: IFormValues) => {
    editTag && dispatch(tagsActions.update.try({ ...editTag, ...values }));
    !editTag && dispatch(tagsActions.create.try(values));
  };

  return (
    <AppModal
      title={editTag ? 'Update tag' : 'Create new tag'}
      isOpen={isOpen}
      close={close}
    >
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
