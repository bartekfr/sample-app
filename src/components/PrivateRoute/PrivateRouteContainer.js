import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

const mapStateToProps = state => ({
  isLogged: state.common.isLogged,
});

export default connect(mapStateToProps)(PrivateRoute);
