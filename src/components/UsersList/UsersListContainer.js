import { connect } from 'react-redux';
import UsersList from './UsersList';
import { usersLoad } from '../../state/users';
import { getSearchedUsersSelector } from '../../state/users/usersSelectors';

const mapStateToProps = state => ({
  locale: state.i18n.locale,
  users: getSearchedUsersSelector(state),
  loading: state.users.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(usersLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
