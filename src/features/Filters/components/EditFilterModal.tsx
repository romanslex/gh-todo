import React from 'react';
import { AppModal } from 'common/components/AppModal';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useDispatch, useSelector } from 'react-redux';
import { filtersSelectors } from 'features/Filters/Filters.selectors';
import { filtersActions } from 'features/Filters/Filters.slice';

export const EditFilterModal: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(filtersSelectors.getIsLoading);
  const isOpen = useSelector(filtersSelectors.getIsEditModalOpen);

  const close = () => dispatch(filtersActions.toggleEditModal(false));

  return (
    <AppModal title="Create new filter" isOpen={isOpen} close={close}>
      <Form>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Field is required' }]}
        >
          <Input disabled={isLoading} />
        </Form.Item>
        <Form.Item
          label="Query"
          name="query"
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
