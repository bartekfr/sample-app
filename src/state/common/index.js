import 'isomorphic-fetch';
import { clearUserData } from '../../common/js/API';

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ACCEPT_COOKIE = 'ACCEPT_COOKIE';

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

export const loggedIn = () => ({
  type: LOG_IN,
});

export const loggedOut = () => ({
  type: LOG_OUT,
});

export const acceptCookie = () => (dispatch) => {
  localStorage.setItem('cookie', true);
  dispatch({
    type: ACCEPT_COOKIE,
  });
};

export const logOut = () => async (dispatch) => {
  clearUserData();
  dispatch(loggedOut());
};

export const logIn = data => async (dispatch) => {
  // FAKE LOGIN!
  if (data.password === 'root') {
    dispatch(loggedIn());
    localStorage.setItem('loggedIn', true);
    return true;
  }

  throw new Error('Wrong credentials');
};

export const toggleMenu = menuVisible => ({
  type: TOGGLE_MENU,
  menuVisible,
});

// Reducer
export const initState = {
  loading: false,
  menuVisible: false,
  isLogged: !!localStorage.getItem('loggedIn'),
  cookieAccepted: !!localStorage.getItem('cookie'),
};

export default (state = initState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuVisible: action.menuVisible,
      };
    case LOG_IN:
      return {
        ...state,
        isLogged: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
      };
    case ACCEPT_COOKIE:
      return {
        ...state,
        cookieAccepted: true,
      };
    default:
      return state;
  }
};
