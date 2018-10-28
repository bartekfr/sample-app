import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { I18n } from 'react-redux-i18n';
import { logOut } from '../../state/common';

const LogOut = ({ logOutAction }) => (
  <button className="logOut" onClick={logOutAction}>
    {I18n.t('logout')}
  </button>
);

LogOut.propTypes = {
  logOutAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logOutAction: () => {
    ownProps.history.push('/login');
    dispatch(logOut());
  },
});

const LogOutContainer = connect(null, mapDispatchToProps)(LogOut);
export default withRouter(LogOutContainer);
