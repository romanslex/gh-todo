import React from 'react';
import Form from 'antd/es/form';
import Input from 'antd/es/input';
import { Col, Row } from 'antd/es/grid';
import DatePicker from 'antd/es/date-picker';
import { useSelector } from 'react-redux';
import { projectsSelectors } from 'features/Projects/Projects.selectors';
import Select from 'antd/es/select';
import { tagsSelectors } from 'features/Tags/Tags.selectors';
import Card from 'antd/es/card';
import Button from 'antd/es/button';

export const EditTaskForm: React.FC = () => {
  const projects = useSelector(projectsSelectors.getCollection);
  const tags = useSelector(tagsSelectors.getCollection);

  return (
    <Card>
      <Form layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Title">
          <Input name="name" placeholder="Todo ..." />
        </Form.Item>
        <Row gutter={[24, 0]}>
          <Col span={24} md={6}>
            <Form.Item name="dueDate" label="Due date">
              <DatePicker name="dueDate" className="w-100" />
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
