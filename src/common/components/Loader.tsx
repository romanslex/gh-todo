import React from 'react';
import { Spin } from 'antd';
import { Row, Col } from 'antd/es/grid';

export const Loader: React.FC = () => {
  return (
    <Row justify="center">
      <Col>
        <Spin />
      </Col>
    </Row>
  );
};
