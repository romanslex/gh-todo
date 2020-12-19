import React from 'react';
import Menu from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { ERoute } from 'common/const/Router.const';
import { RouterHooks } from 'common/hooks/Router.hooks';

export const AppMenu: React.FC = () => {
  const currentPath = RouterHooks.useCurrentPath();

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[currentPath]}>
      <Menu.Item key={ERoute.Inbox}>
        <Link to={ERoute.Inbox}>Inbox</Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Today}>
        <Link to={ERoute.Today}>Today</Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Week}>
        <Link to={ERoute.Week}>Week</Link>
      </Menu.Item>
    </Menu>
  );
};
