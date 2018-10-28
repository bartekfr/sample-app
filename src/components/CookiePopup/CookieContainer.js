import { connect } from 'react-redux';
import Cookie from './CookiePopup';
import { acceptCookie } from '../../state/common';

const mapStateToProps = state => ({
  accepted: state.common.cookieAccepted,
  locale: state.i18n.locale,
});

const mapDispatchToProps = dispatch => ({
  accept: () => dispatch(acceptCookie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cookie);
