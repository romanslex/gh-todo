import React from 'react';
import Layout from 'antd/es/layout';
import { Sidebar } from 'features/Sidebar/components/Sidebar';

const { Header, Content, Footer } = Layout;

export const Default: React.FC = () => {
  return (
    <Layout className="h-100">
      <Sidebar />
      <Layout>
        <Header className="bg-white">Header</Header>
        <Content className="p-7">Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
