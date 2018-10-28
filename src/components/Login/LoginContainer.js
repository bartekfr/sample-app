import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Login from './Login';
import { logIn, logOut } from '../../state/common';

const mapStateToProps = (state, ownProps) => ({
  isLogged: state.common.isLogged,
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => ({
  logIn: data => dispatch(logIn(data)),
  logOut: () => dispatch(logOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

