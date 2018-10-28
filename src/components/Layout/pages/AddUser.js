import React from 'react';
import { Row, Col } from 'reactstrap';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import AddUser from '../../UserForm/AddUserContainer';

const EditUserView = () => (
  <div className="edit-user-view">
    <Breadcrumbs />
    <Row>
      <Col xs="12">
        <AddUser />
      </Col>
    </Row>
  </div>
);

export default EditUserView;
