import React, { CSSProperties, useCallback } from 'react';
import Menu from 'antd/es/menu';
import { Link } from 'react-router-dom';
import { ERoute } from 'common/const/Router.const';
import { RouterHooks } from 'common/hooks/Router.hooks';
import InboxOutlined from '@ant-design/icons/InboxOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import HourglassOutlined from '@ant-design/icons/HourglassOutlined';
import ProjectOutlined from '@ant-design/icons/ProjectOutlined';
import TagOutlined from '@ant-design/icons/TagOutlined';
import FilterOutlined from '@ant-design/icons/FilterOutlined';
import { SubMenuItemWithAddBtn } from 'features/Sidebar/components/SubMenuItemWithAddBtn';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';
import { tagsActions } from 'features/Tags/Tags.slice';

const projectCircleStyle: CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
};

export const AppMenu: React.FC = () => {
  const dispatch = useDispatch();
  const currentPath = RouterHooks.useCurrentPath();
  const projects = useSelector(projectsSelectors.getCollection);

  const openEditProjectModal = useCallback(() => {
    dispatch(projectsActions.toggleEditModal(true));
  }, [dispatch]);
  const openEditTagModal = useCallback(() => {
    dispatch(tagsActions.toggleEditModal(true));
  }, [dispatch]);
  const openEditFilterModal = useCallback(() => {}, []);

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
      <Menu.SubMenu
        title={
          <SubMenuItemWithAddBtn
            icon={<ProjectOutlined />}
            onAdd={openEditProjectModal}
            title="Projects"
          />
        }
      >
        {projects.map((project) => (
          <Menu.Item key={project.id}>
            <div className="d-flex d-flex_align--center">
              <div
                style={projectCircleStyle}
                className={`mr-2 bg-pr-${project.color}`}
              />
              <div>{project.name}</div>
            </div>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <SubMenuItemWithAddBtn
            icon={<TagOutlined />}
            onAdd={openEditTagModal}
            title="Tags"
          />
        }
      />
      <Menu.SubMenu
        title={
          <SubMenuItemWithAddBtn
            icon={<FilterOutlined />}
            onAdd={openEditFilterModal}
            title="Filters"
          />
        }
      />
    </Menu>
  );
};
