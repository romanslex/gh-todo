import Dropdown from 'antd/es/dropdown';
import React from 'react';
import Menu from 'antd/es/menu';
import Popconfirm from 'antd/es/popconfirm';
import Button from 'antd/es/button';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

interface IComponentProps {
  onRemove: () => void;
}

export const SidebarDropdown: React.FC<IComponentProps> = ({
  onRemove,
}: IComponentProps) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item>
            <Popconfirm
              placement="topLeft"
              title="Are you sure you want to remove item?"
              onConfirm={onRemove}
              okText="Yes"
              cancelText="No"
              okType="danger"
            >
              <Button size="small" type="text">
                Remove
              </Button>
            </Popconfirm>
          </Menu.Item>
        </Menu>
      }
      trigger={['click']}
    >
      <MoreOutlined />
    </Dropdown>
  );
};
