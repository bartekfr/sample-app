import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import Appbar from './Appbar';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
});

const mapDispatchToProps = dispatch => ({
  changeLang: data => dispatch(setLocale(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
