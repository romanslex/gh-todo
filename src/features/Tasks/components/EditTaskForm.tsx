import React from 'react';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { Col, Row } from 'antd/es/grid';
import DatePicker from 'antd/es/date-picker';
import { useDispatch, useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import Select from 'antd/es/select';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import Card from 'antd/es/card';
import Button from 'antd/es/button';
import { Moment } from 'moment';
import { tasksActions } from 'features/Tasks/Tasks.slice';
import {
  DATE_DISPLAY_FORMAT,
  momentToNumber,
} from 'common/Helpers/Date.helpers';

interface IFormValues {
  name: string;
  project?: string;
  tags?: string[];
  dueDate?: Moment;
}

export const EditTaskForm: React.FC = () => {
  const projects = useSelector(projectsSelectors.getCollection);
  const tags = useSelector(tagsSelectors.getCollection);
  const dispatch = useDispatch();

  const submit = (values: IFormValues) => {
    const { dueDate } = values;
    dispatch(
      tasksActions.create.try({ ...values, dueDate: momentToNumber(dueDate) })
    );
  };

  return (
    <Card>
      <Form layout="vertical" autoComplete="off" onFinish={submit}>
        <Form.Item
          name="name"
          label="Title"
          rules={[{ required: true, message: 'Field is required' }]}
        >
          <Input name="name" placeholder="Todo ..." />
        </Form.Item>
        <Row gutter={[24, 0]}>
          <Col span={24} md={6}>
            <Form.Item name="dueDate" label="Due date">
              <DatePicker
                format={DATE_DISPLAY_FORMAT}
                name="dueDate"
                className="w-100"
              />
            </Form.Item>
          </Col>
          <Col span={24} md={6}>
            <Form.Item name="project" label="Project">
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
          </Col>
          <Col span={24} md={12}>
            <Form.Item name="tags" label="Tags">
              <Select mode="multiple" className="w-100" placeholder="Tags">
                {tags.map((tag) => (
                  <Select.Option key={tag.id} value={tag.id}>
                    {tag.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
            <Button type="link">Cancel</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
