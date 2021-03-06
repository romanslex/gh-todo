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
import { SubMenuItemWithAddBtn } from 'features/Sidebar/components/SubMenuItemWithAddBtn';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import { projectsActions } from 'features/Projects/Projects.slice';
import { tagsActions } from 'features/Tags/Tags.slice';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import { SidebarDropdown } from 'features/Sidebar/components/SidebarDropdown';
import { IProjectModel } from 'features/Projects/Projects.models';
import { ITagModel } from 'features/Tags/Tags.models';
import { ColorCircle } from 'common/components/ColorCircle';
import { Col, Row } from 'antd/es/grid';
import { getColorValue } from 'common/models/EColor';

interface IComponentProps {
  closeMobileMenu?: () => void;
}

const getUrl = (baseUrl: string, id: string) => `${baseUrl}/${id}`;

export const AppMenu: React.FC<IComponentProps> = ({
  closeMobileMenu,
}: IComponentProps) => {
  const dispatch = useDispatch();
  const currentPath = RouterHooks.useCurrentPath();
  const projects = useSelector(projectsSelectors.getCollectionWithoutInbox);
  const tags = useSelector(tagsSelectors.getCollection);

  const hasProjects = projects.length > 0;
  const hasTags = tags.length > 0;

  const close = () => closeMobileMenu && closeMobileMenu();

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

  return (
    <Menu theme="dark" mode="inline" selectedKeys={[currentPath]}>
      <Menu.Item key={ERoute.Inbox} icon={<InboxOutlined />}>
        <Link to={ERoute.Inbox} onClick={close}>
          Inbox
        </Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Today} icon={<HourglassOutlined />}>
        <Link to={ERoute.Today} onClick={close}>
          Today
        </Link>
      </Menu.Item>
      <Menu.Item key={ERoute.Week} icon={<CalendarOutlined />}>
        <Link to={ERoute.Week} onClick={close}>
          Week
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key={ERoute.Project}
        title={
          <SubMenuItemWithAddBtn
            icon={<ProjectOutlined />}
            onAdd={openEditProjectModal}
            title="Projects"
          />
        }
      >
        {hasProjects &&
          projects.map((project) => (
            <Menu.Item key={project.id} className="pr-0">
              <Row align="middle">
                <Col>
                  <ColorCircle
                    width="10px"
                    height="10px"
                    color={project.color}
                    className="mr-2"
                  />
                </Col>
                <Col flex={1}>
                  <Link
                    to={getUrl(ERoute.Project, project.id)}
                    className="c-white"
                    onClick={close}
                  >
                    <div className="flex-grow-1">{project.name}</div>
                  </Link>
                </Col>
                <Col>
                  <SidebarDropdown
                    onEdit={() => openEditProjectModal(project)}
                    onRemove={() => removeProject(project.id)}
                  />
                </Col>
              </Row>
            </Menu.Item>
          ))}
        {!hasProjects && <Menu.Item>No projects yet</Menu.Item>}
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
        {hasTags &&
          tags.map((tag) => (
            <Menu.Item key={tag.id} className="pr-0">
              <Row align="middle">
                <Col>
                  <TagOutlined style={{ color: getColorValue(tag.color) }} />
                </Col>
                <Col flex={1}>
                  <Link
                    to={getUrl(ERoute.Tag, tag.id)}
                    className="c-white"
                    onClick={close}
                  >
                    <div className="flex-grow-1">{tag.name}</div>
                  </Link>
                </Col>
                <Col>
                  <SidebarDropdown
                    onEdit={() => openEditTagModal(tag)}
                    onRemove={() => removeTag(tag.id)}
                  />
                </Col>
              </Row>
            </Menu.Item>
          ))}
        {!hasTags && <Menu.Item>No tags yet</Menu.Item>}
      </Menu.SubMenu>
    </Menu>
  );
};
