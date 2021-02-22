import React from 'react';
import Button from 'antd/es/button';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';

export const AddTaskButton: React.FC = () => {
  return (
    <Button type="link" icon={<PlusCircleOutlined />}>
      Add task
    </Button>
  );
};
