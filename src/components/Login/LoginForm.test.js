// Integration test based on https://github.com/tylercollier/redux-form-test
import React from 'react';
import { mount } from 'enzyme';

// In this file we're doing an integration test. Thus we need to hook up our
// form component to Redux and Redux-Form. To do that, we need to create the
// simplest redux store possible that will work with Redux-Form.
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Form from './Login';

describe('Login form', () => {
  let store;
  let onSubmit;
  let logIn;
  let subject;
  let history;
  let logOut;

  beforeEach(() => {
    store = createStore(combineReducers({ form: formReducer }));
    onSubmit = jest.fn();
    logIn = jest.fn(() => Promise.resolve());
    history = {
      push: jest.fn(),
    };
    logOut = jest.fn();
    const props = {
      logIn,
      history,
      logOut,
    };
    // With redux-form v5, we could do <Form store={store}/>.
    // However, with redux-form v6, the Field component we use is itself
    // connected to the redux store. Therefore, we must put the store into
    // context. To do that, we use <Provider/>.
    subject = mount(<Provider store={store}><Form {...props} /></Provider>);
    subject.find(Form).instance().submit = onSubmit;
    jest.spyOn(subject.find(Form).instance(), 'onSubmitSuccess');
    // subject.update();
  });

  it('shows validation errors', () => {
    const form = subject.find('form');
    // Our form, when connected to Redux-Form, won't submit unless it's
    // valid. Thus, we type a first name here to make the form's inputs,
    // and thus the form, valid.
    form.simulate('submit');
    const errorEl = subject.find('.form__error');
    expect(errorEl.length).toBe(2);
  });

  it('calls onSubmit if form is valid', () => {
    const form = subject.find('form');
    const userInput = form.find('input#username');
    const passwordInput = form.find('input#password');
    // Our form, when connected to Redux-Form, won't submit unless it's
    // valid. Thus, we type a first name here to make the form's inputs,
    // and thus the form, valid.
    form.simulate('submit');

    expect(onSubmit).toHaveBeenCalledTimes(0);

    userInput.simulate('change', { target: { value: 'Joe' } });

    userInput.simulate('change', { target: { value: 'Joe' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    form.simulate('submit');

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls submiSuccess if form is submitted', () => {
    const form = subject.find('form');
    const instance = subject.find(Form).instance();
    const userInput = form.find('input#username');
    const passwordInput = form.find('input#password');

    userInput.simulate('change', { target: { value: 'Joe' } });
    passwordInput.simulate('change', { target: { value: 'password' } });
    form.simulate('submit');

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(instance.onSubmitSuccess).toHaveBeenCalledTimes(1);
    expect(history.push).toHaveBeenCalled();
  });

  it('Logs out currently logged in user', () => {
    expect(logOut).toHaveBeenCalled();
  });
});
