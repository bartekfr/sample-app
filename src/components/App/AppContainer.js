import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
