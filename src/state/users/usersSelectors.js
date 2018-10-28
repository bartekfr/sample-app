import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form';

const selectedUsersSelector = formValueSelector('UsersSearch');

const getUsers = state => state.users.data;
const getSearchQuery = state => selectedUsersSelector(state, 'query');

export const searchUsers = (users, query = '') => {
  const lowerCaseQuery = query.toLowerCase();

  return users.filter((u) => {
    const matchName = u.name.toLowerCase().indexOf(lowerCaseQuery) > -1;
    const matchUsername = u.username.toLowerCase().indexOf(lowerCaseQuery) > -1;
    const matchEmail = u.email.toLowerCase().indexOf(lowerCaseQuery) > -1;

    return matchName || matchEmail || matchUsername;
  });
};

export const getSearchedUsersSelector = createSelector(
  getUsers,
  getSearchQuery,
  searchUsers,
);
