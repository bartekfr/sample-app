import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm, propTypes } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { Row, Col, Form, Button } from 'reactstrap';
import { renderField } from '../UI/FormFields';
import { required, email } from '../../common/js/validationRules';

// no prop types validation since redux-form doesn't provide prop types for Fields componnt

/* eslint-disable react/no-array-index-key */

const UserForm = ({
  handleSubmit,
  submitting,
  error,
  edit,
}) => {
  const inProgress = submitting;

  const saveButton = (
    <Button
      type="submit"
      color="primary"
      disabled={inProgress}
    >
      {I18n.t('saveChanges')}
    </Button>
  );
  const title = edit ? I18n.t('editUser') : I18n.t('addUser');

  const submitBtn = (
    <div className="form__submit-wrapper">
      <NavLink
        to="/users"
        className="btn btn-outline-primary"
        exact
      >
        {I18n.t('cancel')}
      </NavLink>
      {saveButton}
    </div>
  );

  return (
    <div className="user-edit edit-form">
      <Form className="user-edit__form" onSubmit={handleSubmit}>
        <div className="page-title-wrapper">
          <h1 className="page-title">
            {title}
          </h1>
        </div>
        <div>
          {inProgress ?
            <div className="loader-wrapper"><div className="loader" /></div>
            : null
          }
          <div className="form-section">
            <h3 className="form-section__title">{I18n.t('userData')}</h3>
            <Row>
              <Col xs="12" sm="6" lg="5" xl="5">
                <Field
                  name="name"
                  type="text"
                  component={renderField}
                  label={I18n.t('name')}
                  validate={[required]}
                  htmlFor="name"
                />
              </Col>
              <Col xs="12" sm="6" lg="5" xl="5">
                <Field
                  name="username"
                  type="text"
                  component={renderField}
                  label={I18n.t('username')}
                  validate={[required]}
                  htmlFor="username"
                />
              </Col>
              <Col xs="12" sm="6" lg="5" xl="5">
                <Field
                  name="email"
                  type="text"
                  validate={[required, email]}
                  component={renderField}
                  label={I18n.t('emailAddress')}
                  htmlFor="email"
                />
              </Col>
            </Row>
          </div>
          {(error) && <div className="generic-error">{error}</div>}
          {submitBtn}
        </div>
      </Form>
    </div>
  );
};


UserForm.propTypes = {
  ...propTypes,
};

export default reduxForm({
  enableReinitialize: true,
  form: 'UserForm', // a unique identifier for this form,
})(UserForm);

