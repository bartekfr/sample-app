import React from 'react';
import { Row, Col } from 'reactstrap';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Users from '../../UsersList/UsersListContainer';

const UsersView = () => (
  <div className="users-view">
    <Breadcrumbs />
    <Row>
      <Col xs="12">
        <Users />
      </Col>
    </Row>
  </div>
);

export default UsersView;
