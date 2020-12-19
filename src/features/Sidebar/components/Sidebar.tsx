import React from 'react';
import Layout from 'antd/es/layout';
import { AppMenu } from 'features/Sidebar/components/AppMenu';
import { MobileSidebar } from 'features/Sidebar/components/MobileSidebar';

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
  return (
    <>
      <Sider trigger={null} collapsible theme="dark" width={250}>
        <div
          className="c-white d-flex d-flex_justify--center d-flex_align--center fs-xl"
          style={{ height: '64px' }}
        >
          GH Todo
        </div>
        <AppMenu />
      </Sider>
      <MobileSidebar />
    </>
  );
};
