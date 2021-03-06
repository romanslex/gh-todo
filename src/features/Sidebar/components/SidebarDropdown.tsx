import Dropdown from 'antd/es/dropdown';
import React from 'react';
import Menu from 'antd/es/menu';
import Popconfirm from 'antd/es/popconfirm';
import Button from 'antd/es/button';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

interface IComponentProps {
  onRemove: () => void;
  onEdit: () => void;
}

export const SidebarDropdown: React.FC<IComponentProps> = ({
  onRemove,
  onEdit,
}: IComponentProps) => {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item>
            <a className="ant-dropdown-link" onClick={onEdit}>
              Edit
            </a>
          </Menu.Item>
          <Menu.Item>
            <Popconfirm
              placement="topLeft"
              title="Are you sure you want to remove item?"
              onConfirm={onRemove}
              okText="Yes"
              cancelText="No"
              okType="danger"
            >
              <a className="ant-dropdown-link">Remove</a>
            </Popconfirm>
          </Menu.Item>
        </Menu>
      }
      trigger={['click']}
    >
      <Button className="c-white" type="text" icon={<MoreOutlined />} />
    </Dropdown>
  );
};
