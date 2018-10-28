import React from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { Form } from 'reactstrap';
import { I18n } from 'react-redux-i18n';
import { renderSearchField } from '../UI/FormFields';

const UsersSearchForm = () => (
  <Form className="list-filters">
    <Field
      name="query"
      type="text"
      placeholder={I18n.t('searchUsers')}
      component={renderSearchField}
    />
  </Form>
);

UsersSearchForm.propTypes = {
  ...propTypes,
};

export default reduxForm({
  pure: false, // update component when lang changed
  form: 'UsersSearch',
})(UsersSearchForm);
