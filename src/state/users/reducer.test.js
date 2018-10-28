import thunk from 'redux-thunk';
import { put, call } from 'redux-saga/effects';
import configureMockStore from 'redux-mock-store';
import reducer, {
  USERS_LOADED,
  USERS_LOADING,
  loadUsers,
  usersLoaded,
  usersLoading,
  initState,
} from './';
import authFetch from '../../common/js/API';

// mocks and store config
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Tests
describe('Users reducer and action creators', () => {
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

    it('should handle USERS_LOADED', () => {
      const state = reducer(undefined, { type: USERS_LOADED, data: 345 });
      const expectedData = {
        ...initState,
        data: 345,
        loading: false,
      };

      expect(state).toEqual(expectedData);
    });
  });

  describe('Actions creators', () => {
    it('creates USERS_LOADED', async () => {
      const store = mockStore();
      store.dispatch(usersLoaded('abc'));
      const expectedActions = [{
        type: USERS_LOADED,
        data: 'abc',
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates USERS_LOADING', async () => {
      const store = mockStore();
      store.dispatch(usersLoading(false));
      const expectedActions = [{
        type: USERS_LOADING,
        loading: false,
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Sagass', () => {
    it('creates USERS_LOADING', async () => {
      const fakeResponse = {
        ok: true,
        json: jest.fn(),
      };
      const generator = loadUsers();
      let next = generator.next();
      expect(next.value).toEqual(put(usersLoading()));

      next = generator.next();
      expect(next.value).toEqual(call(authFetch, 'users', {
        method: 'get',
      }));

      next = generator.next(fakeResponse);
      expect(next.value).toEqual(call([fakeResponse, 'json']));

      const responseData = [];
      next = generator.next(responseData);
      expect(next.value).toEqual(put(usersLoaded(responseData)));
    });
  });
});
