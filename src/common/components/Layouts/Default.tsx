import React from 'react';
import Layout from 'antd/es/layout';
import { Sidebar } from 'features/Sidebar/components/Sidebar';
import Button from 'antd/es/button';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import { useDispatch } from 'react-redux';
import { sidebarActions } from 'features/Sidebar/Sidebar.slice';
import { EditProjectModal } from 'features/Projects/components/EditProjectModal';
import { useInit } from 'common/hooks/Init.hooks';
import { EditTagModal } from 'features/Tags/components/EditTagModal';
import { EditTaskForm } from 'features/Tasks/components/EditTaskForm';
import { ERoute } from 'common/const/Router.const';
import { InboxPage } from 'common/components/Pages/InboxPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProjectPage } from 'common/components/Pages/ProjectPage';
import { TodayPage } from 'common/components/Pages/TodayPage';
import { WeekPage } from 'common/components/Pages/WeekPage';
import { TagPage } from 'common/components/Pages/TagPage';

const { Header, Content } = Layout;

export const Default: React.FC = () => {
  const dispatch = useDispatch();
  const toggleMobileMenu = () => {
    dispatch(sidebarActions.toggleMobileMenu(true));
  };

  useInit();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header className="bg-white pr-7 pl-7 d-flex d-flex_justify--space-between d-flex_align--center">
          <div className="mobile-only fs-xl">GH Todo</div>
          <Button
            type="text"
            onClick={toggleMobileMenu}
            className="mobile-only"
          >
            <MenuOutlined />
          </Button>
        </Header>
        <Content className="p-7">
          <Switch>
            <Route path={ERoute.Inbox} component={InboxPage} />
            <Route path={ERoute.Today} component={TodayPage} />
            <Route path={ERoute.Week} component={WeekPage} />
            <Route path={ERoute.Tag} component={TagPage} />
            <Route path={ERoute.Project} component={ProjectPage} />
            <Route path="*" component={() => <Redirect to={ERoute.Inbox} />} />
          </Switch>
          <EditTaskForm />
        </Content>
      </Layout>
      <EditProjectModal />
      <EditTagModal />
    </Layout>
  );
};
