import React from 'react';
import { MobileSidebar } from 'features/Sidebar/components/MobileSidebar';
import { DesktopSidebar } from 'features/Sidebar/components/DesktopSidebar';

export const Sidebar: React.FC = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};
