import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer, {
  USER_LOADING,
  USER_LOADED,
  userLoaded,
  getUser,
  initState,
} from './';
import { apiUrl } from '../../config/js/consts';

// mocks and store config
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Tests
describe('User reducer and actions creators', () => {
  describe('Reducer', () => {
    it('should return the initial state', () => {
      const state = reducer(undefined, {});

      expect(state).toEqual(initState);
    });

    it('should return existing state if unknown action is called', () => {
      const state = reducer({ loading: 123 }, { type: 'UNKNOWN_ACTION' });

      expect(state).toEqual({
        loading: 123,
      });
    });

    it('should handle USER_LOADED', () => {
      const state = reducer(undefined, { type: USER_LOADED, data: 345 });
      const expectedData = {
        ...initState,
        data: 345,
        loading: false,
      };

      expect(state).toEqual(expectedData);
    });
  });

  describe('Actions creators', () => {
    it('creates USER_LOADED after fetch', async () => {
      fetchMock
        .mock(`${apiUrl}/users/22`, {
          body: { test: 'lorem ipsum' },
        });
      const store = mockStore();
      await store.dispatch(getUser(22));
      const expectedActions = [{
        type: USER_LOADING,
        loading: true,
      }, {
        type: USER_LOADED,
        data: { test: 'lorem ipsum' },
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates USER_LOADED', async () => {
      const store = mockStore();
      store.dispatch(userLoaded('aaaa'));
      const expectedActions = [{
        type: USER_LOADED,
        data: 'aaaa',
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
