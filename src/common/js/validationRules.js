export const required = value => (value ? undefined : 'Required');

export const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);

export const minLength = min => value =>
  (value && value.length < min ? `Must be ${min} characters or more` : undefined);

export const number = value =>
  (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined);

export const maxValue = max => value =>
  (value && value > max ? `Max allowed value is ${max}` : undefined);

/* eslint-disable  no-useless-escape */
export const email = value =>
  (value && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value)
    ? 'Invalid email address'
    : undefined);

export const alphaNumeric = value =>
  (value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined);

export const phoneNumber = value =>
  (value && !/^([1-9][0-9]{8})$/i.test(value)
    ? 'Invalid phone number, must be 9 digits'
    : undefined);
