const EditUser = ({ match }) => match.params.id;

export default {
  home: { path: '/', breadcrumb: 'Home' },
  login: { path: '/login' },
  users: { path: '/users', breadcrumb: 'Users' },
  editUserAbstract: { path: '/users/user/:id', breadcrumb: EditUser },
  editUser: { path: '/users/user/:id/edit', breadcrumb: 'Edit user' },
  addUser: { path: '/users/add', breadcrumb: 'Add user' },
};
