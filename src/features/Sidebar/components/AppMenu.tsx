import React, { useCallback } from 'react';
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
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import { filtersActions } from 'features/Filters/Filters.slice';
import { filtersSelectors } from 'features/Filters/Filters.selectors';
import { SidebarDropdown } from 'features/Sidebar/components/SidebarDropdown';
import { IProjectModel } from 'features/Projects/Projects.models';
import { IFilterModel } from 'features/Filters/Filters.models';
import { ITagModel } from 'features/Tags/Tags.models';
import { ColorCircle } from 'common/components/ColorCircle';

export const AppMenu: React.FC = () => {
  const dispatch = useDispatch();
  const currentPath = RouterHooks.useCurrentPath();
  const projects = useSelector(projectsSelectors.getCollectionWithoutInbox);
  const tags = useSelector(tagsSelectors.getCollection);
  const filters = useSelector(filtersSelectors.getCollection);

  const openEditProjectModal = useCallback(
    (data?: IProjectModel) => {
      dispatch(projectsActions.toggleEditModal({ isOpen: true, data }));
    },
    [dispatch]
  );
  const openEditTagModal = useCallback(
    (data?: ITagModel) => {
      dispatch(tagsActions.toggleEditModal({ isOpen: true, data }));
    },
    [dispatch]
  );
  const openEditFilterModal = useCallback(
    (data?: IFilterModel) => {
      dispatch(filtersActions.toggleEditModal({ isOpen: true, data }));
    },
    [dispatch]
  );

  const removeProject = useCallback(
    (projectId) => {
      dispatch(projectsActions.remove.try(projectId));
    },
    [dispatch]
  );
  const removeTag = useCallback(
    (tagId) => dispatch(tagsActions.remove.try(tagId)),
    [dispatch]
  );
  const removeFilter = useCallback(
    (filterId) => dispatch(filtersActions.remove.try(filterId)),
    [dispatch]
  );

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
          <Menu.Item key={project.id} className="pr-0">
            <div className="d-flex d-flex_align--center">
              <ColorCircle
                width="10px"
                height="10px"
                color={project.color}
                className="mr-2"
              />
              <div className="flex-grow-1">{project.name}</div>
              <SidebarDropdown
                onEdit={() => openEditProjectModal(project)}
                onRemove={() => removeProject(project.id)}
              />
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
      >
        {tags.map((tag) => (
          <Menu.Item key={tag.id} className="pr-0">
            <div className="d-flex d-flex_align--center">
              <div className="flex-grow-1">{tag.name}</div>
              <SidebarDropdown
                onEdit={() => openEditTagModal(tag)}
                onRemove={() => removeTag(tag.id)}
              />
            </div>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu
        title={
          <SubMenuItemWithAddBtn
            icon={<FilterOutlined />}
            onAdd={openEditFilterModal}
            title="Filters"
          />
        }
      >
        {filters.map((filter) => (
          <Menu.Item key={filter.id} className="pr-0">
            <div className="d-flex d-flex_align--center">
              <div className="flex-grow-1">{filter.name}</div>
              <SidebarDropdown
                onEdit={() => openEditFilterModal(filter)}
                onRemove={() => removeFilter(filter.id)}
              />
            </div>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    </Menu>
  );
};
