import React from 'react';
// import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { Form, Button } from 'reactstrap';
import { required } from '../../common/js/validationRules';
import { renderField } from '../UI/FormFields';

const LoginFormTemplate = (props) => {
  const {
    handleSubmit,
    submitting,
    error,
  } = props;
  const submitBtn = (
    <div className="form__submit-wrapper">
      <Button
        type="submit"
        color="primary"
      >
        {I18n.t('logIn')}
      </Button>
    </div>
  );
  return (
    <Form className="login__form" onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label={I18n.t('username')}
        validate={[required]}
        htmlFor="username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label={I18n.t('password')}
        validate={[required]}
        htmlFor="password"
      />
      {error && <div className="login__error">{error}</div>}
      {submitting ? <div className="loader" /> : submitBtn}
    </Form>
  );
};

LoginFormTemplate.propTypes = {
  ...propTypes,
};

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginFormTemplate);

