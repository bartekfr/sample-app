import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { i18nReducer } from 'react-redux-i18n';
import common, { LOG_OUT } from './common';
import users from './users';
import user from './user';

const appReducer = combineReducers({
  common,
  users,
  user,
  form: formReducer,
  i18n: i18nReducer,
});

export default (state, action) => {
  let newState = state;
  if (action.type === LOG_OUT) {
    const { i18n } = state;
    newState = { i18n };
  }

  return appReducer(newState, action);
};
