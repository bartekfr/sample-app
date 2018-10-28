import React from 'react';
// import PropTypes from 'prop-types';

const PrettyCheckbox = props => (
  <span>
    <input {...props} />
    <span className="fake-checkbox icon-ok" />
  </span>
);

export default PrettyCheckbox;
