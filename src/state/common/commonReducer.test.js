import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import reducer, {
  START_LOADING,
  END_LOADING,
  TOGGLE_MENU,
  LOG_IN,
  LOG_OUT,
  ACCEPT_COOKIE,
  startLoading,
  endLoading,
  toggleMenu,
  logOut,
  acceptCookie,
  initState,
} from './';

// mocks and store config
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Tests
describe('Common reducer and action creators', () => {
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

    it('should handle START_LOADING', () => {
      const state = reducer(undefined, { type: START_LOADING });
      const expectedData = {
        ...initState,
        loading: true,
      };

      expect(state).toEqual(expectedData);
    });

    it('should handle END_LOADING', () => {
      const state = reducer(undefined, { type: END_LOADING });
      const expectedData = {
        ...initState,
        loading: false,
      };

      expect(state).toEqual(expectedData);
    });

    it('should handle TOGGLE_MENU', () => {
      const state = reducer(undefined, { type: TOGGLE_MENU, menuVisible: true });
      const expectedData = {
        ...initState,
        menuVisible: true,
      };

      expect(state).toEqual(expectedData);
    });

    it('should handle LOG_IN', () => {
      const state = reducer(undefined, { type: LOG_IN });
      const expectedData = {
        ...initState,
        isLogged: true,
      };

      expect(state).toEqual(expectedData);
    });

    it('should handle LOG_OUT', () => {
      const state = reducer(undefined, { type: LOG_OUT });
      const expectedData = {
        ...initState,
        isLogged: false,
      };

      expect(state).toEqual(expectedData);
    });

    it('should handle ACCEPT_COOKIE', () => {
      const state = reducer(undefined, { type: ACCEPT_COOKIE });
      const expectedData = {
        ...initState,
        cookieAccepted: true,
      };

      expect(state).toEqual(expectedData);
    });
  });

  describe('Actions creators', () => {
    it('creates START_LOADING', () => {
      const store = mockStore();
      store.dispatch(startLoading());
      const expectedActions = [{
        type: START_LOADING,
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates END_LOADING', () => {
      const store = mockStore();
      store.dispatch(endLoading());
      const expectedActions = [{
        type: END_LOADING,
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates TOGGLE_MENU', () => {
      const store = mockStore();
      store.dispatch(toggleMenu(false));
      const expectedActions = [{
        type: TOGGLE_MENU,
        menuVisible: false,
      }];
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('creates ACCEPT_COOKIE', () => {
      const store = mockStore();
      store.dispatch(acceptCookie());
      const expectedActions = [{
        type: ACCEPT_COOKIE,
      }];
      expect(store.getActions()).toEqual(expectedActions);
      expect(localStorage.setItem).toHaveBeenCalledWith('cookie', true);
    });

    it('creates LOG_OUT ', async () => {
      localStorage.removeItem.mockClear();
      const store = mockStore();
      await store.dispatch(logOut());
      const expectedActions = [{
        type: LOG_OUT,
      }];
      expect(store.getActions()).toEqual(expectedActions);
      expect(localStorage.removeItem).toHaveBeenCalledWith('loggedIn');
    });
    it('gakeT ', async () => {
      localStorage.removeItem.mockClear();
      const store = mockStore();
      await store.dispatch(logOut());
      const expectedActions = [{
        type: LOG_OUT,
      }];
      expect(store.getActions()).toEqual(expectedActions);
      expect(localStorage.removeItem).toHaveBeenCalledWith('loggedIn');
    });
  });
});
