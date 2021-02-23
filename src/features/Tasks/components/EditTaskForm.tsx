import React from 'react';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import DatePicker from 'antd/es/date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import Select from 'antd/es/select';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import Button from 'antd/es/button';
import { Moment } from 'moment';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import { DATE_DISPLAY_FORMAT, DateHelper } from 'common/Helpers/Date.helpers';
import { tasksSelectors } from 'features/Tasks/Tasks.selectors';
import { AppModal } from 'common/components/AppModal';
import { Col, Row } from 'antd/es/grid';
import { isUpdateTaskParams } from 'common/models/IUpdateTaskParams';
import Popconfirm from 'antd/es/popconfirm';

interface IFormValues {
  name: string;
  project: string;
  tags?: string[];
  dueDate?: Moment;
}

export const EditTaskForm: React.FC = () => {
  const projects = useSelector(projectsSelectors.getCollection);
  const tags = useSelector(tagsSelectors.getCollection);
  const isOpen = useSelector(tasksSelectors.getEditFormIsOpen);
  const editTask = useSelector(tasksSelectors.getEditFormData);
  const isLoading = useSelector(tasksSelectors.getIsLoading);
  const dispatch = useDispatch();

  const title = editTask ? 'Edit task' : 'Create task';

  const fields = [
    {
      name: 'name',
      value: editTask?.name,
    },
    {
      name: 'dueDate',
      value: editTask?.dueDate
        ? DateHelper.mapNumberToMoment(editTask.dueDate)
        : undefined,
    },
    {
      name: 'project',
      value: editTask?.project,
    },
    {
      name: 'tags',
      value: editTask?.tags,
    },
  ];

  const submit = (values: IFormValues) => {
    const { dueDate } = values;

    isUpdateTaskParams(editTask) &&
      dispatch(
        tasksActions.update.try({
          id: editTask.id,
          ...values,
          dueDate: dueDate ? DateHelper.mapMomentToNumber(dueDate) : undefined,
        })
      );

    !editTask &&
      dispatch(
        tasksActions.create.try({
          ...values,
          dueDate: dueDate ? DateHelper.mapMomentToNumber(dueDate) : undefined,
        })
      );
  };

  const cancel = () => {
    dispatch(tasksActions.toggleEditForm({ isOpen: false }));
  };

  const deleteTask = () => {
    isUpdateTaskParams(editTask) &&
      dispatch(tasksActions.remove.try(editTask.id));
  };

  return (
    <AppModal
      title={title}
      isOpen={isOpen}
      close={() => tasksActions.toggleEditForm({ isOpen: false })}
    >
      <Form
        layout="vertical"
        autoComplete="off"
        onFinish={submit}
        fields={fields}
      >
        <Form.Item
          name="name"
          label="Title"
          rules={[{ required: true, message: 'Field is required' }]}
        >
          <Input name="name" placeholder="Todo ..." />
        </Form.Item>
        <Form.Item name="dueDate" label="Due date">
          <DatePicker
            format={DATE_DISPLAY_FORMAT}
            name="dueDate"
            className="w-100"
          />
        </Form.Item>
        <Form.Item
          name="project"
          label="Project"
          rules={[{ required: true, message: 'Field is required' }]}
        >
          <Select
            showSearch
            className="w-100"
            placeholder="Select project"
            optionFilterProp="children"
          >
            {projects.map((project) => (
              <Select.Option key={project.id} value={project.id}>
                {project.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Select mode="multiple" className="w-100" placeholder="Tags">
            {tags.map((tag) => (
              <Select.Option key={tag.id} value={tag.id}>
                {tag.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Row justify="space-between">
          <Col>
            {!!editTask && (
              <Popconfirm
                placement="topLeft"
                title="Are you sure you want to delete this task?"
                onConfirm={deleteTask}
                okText="Yes"
                cancelText="No"
                okType="danger"
              >
                <Button danger>Delete</Button>
              </Popconfirm>
            )}
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Save
            </Button>
            <Button onClick={cancel} type="link" disabled={isLoading}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </AppModal>
  );
};
