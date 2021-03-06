import React from 'react';
import { AppModal } from 'common/components/AppModal';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useDispatch, useSelector } from 'react-redux';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import { tagsActions } from 'features/Tags/Tags.slice';
import { isUpdateTagParams } from 'common/models/IUpdateTagParams';
import { EColor } from 'common/models/EColor';
import { ColorPicker } from 'common/components/ColorPicker';

interface IFormValues {
  name: string;
  color: EColor;
}

export const EditTagModal: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(tagsSelectors.getIsLoading);
  const isOpen = useSelector(tagsSelectors.getIsEditModalOpen);
  const editTag = useSelector(tagsSelectors.getEditTagData);
  const fields = [
    { name: 'name', value: editTag?.name },
    { name: 'color', value: editTag?.color || EColor.Red },
  ];

  const title = isUpdateTagParams(editTag) ? 'Update tag' : 'Create new tag';

  const close = () => dispatch(tagsActions.toggleEditModal({ isOpen: false }));
  const finish = (values: IFormValues) => {
    if (isUpdateTagParams(editTag)) {
      dispatch(tagsActions.update.try({ ...editTag, ...values }));
    } else {
      dispatch(tagsActions.create.try(values));
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
