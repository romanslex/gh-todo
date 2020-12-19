import React from 'react';
import { AppMenu } from 'features/Sidebar/components/AppMenu';
import Sider from 'antd/es/layout/Sider';

export const DesktopSidebar: React.FC = () => {
  return (
    <Sider
      trigger={null}
      collapsible
      theme="dark"
      width={250}
      className="desktop-only"
    >
      <div
        className="c-white d-flex d-flex_justify--center d-flex_align--center fs-xl"
        style={{ height: '64px' }}
      >
        GH Todo
      </div>
      <AppMenu />
    </Sider>
  );
};
