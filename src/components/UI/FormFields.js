import React from 'react';
import { fieldPropTypes } from 'redux-form';
import Select from 'react-select';
import { FormGroup, Label, Input, InputGroup, FormText } from 'reactstrap';
import PrettyCheckbox from '../UI/PrettyCheckbox';

export const renderField = ({
  input,
  htmlFor,
  label,
  type,
  meta: { touched, error },
  hint,
  readOnly,
}) => (
  <FormGroup>
    <Label htmlFor={htmlFor}>{label}</Label>
    <div>
      <Input autoComplete="off" {...input} id={htmlFor} type={type} readOnly={readOnly} title={readOnly ? 'This field is readonly' : null} />
      {hint ? <FormText>{hint}</FormText> : null}
      {touched && (error && <span className="form__error">{error}</span>) }
    </div>
  </FormGroup>
);

renderField.propTypes = {
  ...fieldPropTypes,
};

export const renderSearchField = ({
  input,
  htmlFor,
  type,
  placeholder,
}) => (
  <FormGroup>
    <InputGroup>
      <div className="input-group-prepend input-group-addon">
        <i className="icon-search" />
      </div>
      <Input autoComplete="off" placeholder={placeholder} {...input} id={htmlFor} type={type} />
    </InputGroup>
  </FormGroup>
);

renderSearchField.propTypes = {
  ...fieldPropTypes,
};

export const renderCheckbox = ({
  input,
  htmlFor,
  label,
  type,
}) => (
  <FormGroup>
    <Label htmlFor={htmlFor}>
      <PrettyCheckbox
        id={htmlFor}
        className="checkbox"
        type={type}
        {...input}
      />
      {label}
    </Label>
  </FormGroup>
);

renderCheckbox.propTypes = {
  ...fieldPropTypes,
};

export const renderSelect = ({
  input,
  htmlFor,
  label,
  placeholder,
  options,
  meta: { touched, error },
}) => (
  <FormGroup>
    <Label htmlFor={htmlFor}>{label}</Label>
    <div>
      <Select
        {...input}
        id={htmlFor}
        searchable={false}
        clearable={false}
        options={options}
        placeholder={placeholder}
        onChange={o => input.onChange(o.value)}
      />
      {touched && (error && <span className="form__error">{error}</span>) }
    </div>
  </FormGroup>
);

renderSelect.propTypes = {
  ...fieldPropTypes,
};
