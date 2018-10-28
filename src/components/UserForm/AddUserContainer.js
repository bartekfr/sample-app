import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserFormWrapper from './UserFormWrapper';
import { getUser, addUser } from '../../state/user';

const mapStateToProps = () => ({
  loading: false,
  edit: false,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  submitRequest: data => dispatch(addUser(data)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserFormWrapper));

