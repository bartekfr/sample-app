import fetchMock from 'fetch-mock';
import { apiUrl } from '../../config/js/consts';
import authFetch, { clearUserData } from './API';
import history from '../../config/js/history';

history.push = jest.fn();
window.localStorage.getItem = jest.fn(() => '1223');

describe('API helper methods', () => {
  it('handles 401 response', async () => {
    fetchMock
      .mock(`${apiUrl}/test`, {
        status: 401,
      });
    await authFetch('test');
    const lastOptions = fetchMock.lastOptions();

    expect(history.push).toHaveBeenCalledTimes(1);
    expect(lastOptions.headers['X-AUTH-TOKEN']).toBe('1223');
  });

  it('clears useras data', () => {
    window.localStorage.removeItem.mockReset();
    clearUserData();

    expect(window.localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.removeItem.mock.calls).toEqual([['loggedIn']]);
  });
});

