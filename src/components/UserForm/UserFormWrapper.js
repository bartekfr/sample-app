import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { I18n } from 'react-redux-i18n';
import { showToast, showToastError, Msg } from '../UI/Toast';
import Form from './UserForm';
import './styles.css';

export default class UserFormWrapper extends React.Component {
  static defaultProps = {
    edit: true,
    initialValues: {},
  }

  static propTypes = {
    initialValues: PropTypes.object,
    getUser: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    edit: PropTypes.bool,
  }

  componentDidMount() {
    const { match, edit } = this.props;
    if (edit) {
      this.props.getUser(match.params.id);
    }
  }
  onSubmitSuccess() {
    this.props.history.push('/users');
    const msg = this.props.edit ? 'userUpdatedSuccess' : 'userAddedSuccess';
    showToast(Msg, I18n.t(msg));
  }
  async submit(data) {
    try {
      return await this.props.submitRequest(data);
    } catch (e) {
      showToastError(Msg, e.message);
      throw new SubmissionError({
        _error: e.message,
      });
    }
  }
  render() {
    const {
      initialValues,
      loading,
      edit,
    } = this.props;

    const formProps = {
      initialValues,
      onSubmit: data => this.submit(data),
      onSubmitSuccess: result => this.onSubmitSuccess(result),
      edit,
    };

    return (
      <div className="user-form-wrapper">
        { loading ? <div className="loader-wrapper"><div className="loader" /></div> : null}
        <Form {...formProps} />
      </div>
    );
  }
}
