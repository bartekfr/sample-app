import authFetch from '../../common/js/API';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const USER_ADDED = 'USER_ADDED';

export const userLoading = (loading = true) => ({
  type: USER_LOADING,
  loading,
});

export const userLoaded = data => ({
  type: USER_LOADED,
  data,
});

// TODO: migrate to redux-saga
export const getUser = id => async (dispatch) => {
  dispatch(userLoading());
  const response = await authFetch(`users/${id}`, {
    method: 'get',
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(userLoaded(data));
  }
};

export const updateUser = data => async (dispatch) => {
  dispatch(userLoading());
  // FAKE UPDATE REQUEST using JSONPlaceholder API
  const response = await authFetch(`users/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  dispatch(userLoading(false));

  if (response.ok) {
    return true;
  }
  throw new Error('Something went wrong');
};

export const addUser = data => async (dispatch) => {
  dispatch(userLoading());
  // FAKE ADD REQUEST using JSONPlaceholder API
  const response = await authFetch('users', {
    method: 'post',
    body: JSON.stringify(data),
  });
  dispatch(userLoading(false));

  if (response.ok) {
    return true;
  }
  return new Error('Something went wrong');
};


// Reducer
export const initState = {
  loading: false,
  data: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case USER_LOADED:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
      });
    default:
      return state;
  }
};
