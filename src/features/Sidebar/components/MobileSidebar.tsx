import React from 'react';
import Drawer from 'antd/es/drawer';
import { AppMenu } from 'features/Sidebar/components/AppMenu';

export const MobileSidebar: React.FC = () => {
  return (
    <Drawer
      title="GH Todo"
      placement="left"
      closable={false}
      onClose={() => console.log('close')}
      visible={false}
      key="top"
    >
      <AppMenu />
    </Drawer>
  );
};
