import React from 'react';
import Layout from 'antd/es/layout';
import Menu from 'antd/es/menu';

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  return (
    <Sider trigger={null} collapsible theme="dark" width={250}>
      <div
        className="c-white d-flex d-flex_justify--center d-flex_align--center fs-xl"
        style={{ height: '64px' }}
      >
        GH Todo
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Sider>
  );
};
