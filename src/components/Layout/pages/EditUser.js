import React from 'react';
import { Row, Col } from 'reactstrap';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import EditUser from '../../UserForm/EditUserContainer';

const EditUserView = () => (
  <div className="edit-user-view">
    <Breadcrumbs />
    <Row>
      <Col xs="12">
        <EditUser />
      </Col>
    </Row>
  </div>
);

export default EditUserView;
