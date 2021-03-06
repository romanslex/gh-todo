import React from 'react';
import Drawer from 'antd/es/drawer';
import { AppMenu } from 'features/Sidebar/components/AppMenu';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarSelectors } from 'features/Sidebar/Sidebar.selectors';
import { sidebarActions } from 'features/Sidebar/Sidebar.slice';
import { useMediaPredicate } from 'react-media-hook';
import { MEDIA_MOBILE_MAX_WIDTH } from 'common/const/Common.const';

export const MobileSidebar: React.FC = () => {
  const isOpen = useSelector(sidebarSelectors.getIsMobileMenuOpen);
  const dispatch = useDispatch();

  const isMobile: boolean = useMediaPredicate(MEDIA_MOBILE_MAX_WIDTH);

  const closeMenu = () => dispatch(sidebarActions.toggleMobileMenu(false));

  if (!isMobile) {
    closeMenu();
  }

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
      <AppMenu closeMobileMenu={closeMenu} />
    </Drawer>
  );
};
