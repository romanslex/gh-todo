import React from 'react';
import Drawer from 'antd/es/drawer';
import { AppMenu } from 'features/Sidebar/components/AppMenu';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarSelectors } from 'features/Sidebar/Sidebar.selectors';
import { sidebarActions } from 'features/Sidebar/Sidebar.slice';

export const MobileSidebar: React.FC = () => {
  const isOpen = useSelector(sidebarSelectors.getIsMobileMenuOpen);
  const dispatch = useDispatch();

  const closeMenu = () => dispatch(sidebarActions.toggleMobileMenu(false));

  return (
    <Drawer
      title="GH Todo"
      placement="left"
      closable
      onClose={closeMenu}
      visible={isOpen}
      key="top"
      className="mobile-sidebar"
      closeIcon={null}
    >
      <AppMenu />
    </Drawer>
  );
};
