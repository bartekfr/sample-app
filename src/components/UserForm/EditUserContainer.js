import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import UserFormWrapper from './UserFormWrapper';
import { getUser, updateUser } from '../../state/user';

const mapStateToProps = state => ({
  initialValues: state.user.data,
  loading: state.user.loading,
  edit: true,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  submitRequest: data => dispatch(updateUser(data)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserFormWrapper));

