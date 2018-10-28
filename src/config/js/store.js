import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import mainReducer from '../../state/reducer';
import rootSaga from '../../state/saga';
import translations from './i18n';

/*
 Uses both redux-saga and thunk:
  - saga is better for complex async actions while
  - thunk is better (requires less code) for small sync actions with some simple logic
 Besides, redux-form doesn't work well with saga - according to redux-form author:
 "[redux-form] relies on the use of Promise middleware to some extent"
 There are some helper libs to integrate redux-form with sagas
 but they seem to add too much complexity and cause some issues
*/
const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);
// i18n
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));

// action setting i18n language
store.dispatch(setLocale('en'));

export default store;
