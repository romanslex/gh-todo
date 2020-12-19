import React from 'react';
import Layout from 'antd/es/layout';
import { Sidebar } from 'features/Sidebar/components/Sidebar';
import Button from 'antd/es/button';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { useDispatch } from 'react-redux';
import { sidebarActions } from 'features/Sidebar/Sidebar.slice';

const { Header, Content, Footer } = Layout;

export const Default: React.FC = () => {
  const dispatch = useDispatch();
  const toggleMobileMenu = () => {
    dispatch(sidebarActions.toggleMobileMenu(true));
  };

  return (
    <Layout className="h-100">
      <Sidebar />
      <Layout>
        <Header className="bg-white pr-7 pl-7">
          <Button
            type="text"
            onClick={toggleMobileMenu}
            className="mobile-only"
          >
            <MenuOutlined />
          </Button>
        </Header>
        <Content className="p-7">Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
