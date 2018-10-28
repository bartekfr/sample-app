import 'isomorphic-fetch';
import { apiUrl } from '../../config/js/consts';
import history from '../../config/js/history';
import { showToastError, Msg } from '../../components/UI/Toast';

export const clearUserData = () => {
  localStorage.removeItem('loggedIn');
};

const authFetch = async (url, options) => {
  // not needed in this app since there is no real authentication
  const authOptions = Object.assign({}, options, {
    headers: {
      Accept: 'application/json, text/plain',
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': localStorage.getItem('token'),
    },
  });
  const response = await fetch(`${apiUrl}/${url}`, authOptions);

  if (!response.ok) {
    showToastError(Msg, 'Something went wrong');
  }

  if (response.status === 401) {
    history.push('/login');
    clearUserData();
  }

  return response;
};

export default authFetch;
