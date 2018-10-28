import { put, call, takeEvery } from 'redux-saga/effects';
import authFetch from '../../common/js/API';

export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOADED = 'USERS_LOADED';
export const USERS_LOADING = 'USERS_LOADING';

export const usersLoad = () => ({
  type: USERS_LOAD,
});

export const usersLoaded = data => ({
  type: USERS_LOADED,
  data,
});

export const usersLoading = (loading = true) => ({
  type: USERS_LOADING,
  loading,
});

// Sagas
export function* loadUsers() {
  yield put(usersLoading());

  try {
    const response = yield call(authFetch, 'users', {
      method: 'get',
    });

    if (response.ok) {
      const data = yield call([response, 'json']);
      yield put(usersLoaded(data));
    }
  } catch (e) {
  // handle error
  }
  yield put(usersLoading(false));
}

export const usersSagas = [
  takeEvery(USERS_LOAD, loadUsers),
];

// Reducer
export const initState = {
  loading: false,
  data: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case USERS_LOADED:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    default:
      return state;
  }
};
