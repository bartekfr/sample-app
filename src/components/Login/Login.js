import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.logOut();
  }
  onSubmitSuccess() {
    this.props.history.push('/');
  }
  submit(data) {
    return this.props.logIn(data).catch((error) => {
      throw new SubmissionError({
        _error: error.message,
      });
    });
  }
  render() {
    return (
      <LoginForm
        onSubmit={data => this.submit(data)}
        onSubmitSuccess={() => this.onSubmitSuccess()}
      />
    );
  }
}
