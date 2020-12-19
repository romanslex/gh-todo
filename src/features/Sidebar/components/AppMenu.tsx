import React from 'react';
import Menu from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { ERoute } from 'common/const/Router.const';
import { RouterHooks } from 'common/hooks/Router.hooks';
import InboxOutlined from '@ant-design/icons/InboxOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import HourglassOutlined from '@ant-design/icons/HourglassOutlined';

export const AppMenu: React.FC = () => {
  const currentPath = RouterHooks.useCurrentPath();

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[currentPath]}>
      <Menu.Item key={ERoute.Inbox} icon={<InboxOutlined />}>
        <Link to={ERoute.Inbox}>Inbox</Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Today} icon={<HourglassOutlined />}>
        <Link to={ERoute.Today}>Today</Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Week} icon={<CalendarOutlined />}>
        <Link to={ERoute.Week}>Week</Link>
      </Menu.Item>
    </Menu>
  );
};
