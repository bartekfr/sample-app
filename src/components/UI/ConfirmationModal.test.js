import React from 'react';
import { mount } from 'enzyme';
import * as ReactStrap from 'reactstrap';
import ConfirmationModal from './ConfirmationModal';

ReactStrap.Modal = () => <div />;

describe('Confirmation modal', () => {
  let action;
  let Component;
  let wrapper;

  beforeEach(() => {
    action = jest.fn();
    Component = (
      <ConfirmationModal
        action={() => action()}
        entityName="StationName"
      >
        <button type="button">Click</button>
      </ConfirmationModal>
    );
    wrapper = mount(Component);
  });

  it('Renders correctly', () => {
    expect(wrapper.find('.confirmation').length).toBe(1);
  });

  it('Opens modal', () => {
    let modalState = wrapper.state().modal;
    expect(modalState).toBe(false);

    wrapper.find('button').simulate('click');
    modalState = wrapper.state().modal;

    expect(modalState).toBe(true);
  });

  it('Triggers action', () => {
    wrapper.find('button').simulate('click');
    const instance = wrapper.instance();
    jest.spyOn(instance, 'close');
    instance.confirmAction();

    expect(action).toHaveBeenCalled();
    expect(instance.close).toHaveBeenCalled();
  });

  it('Toggles state', () => {
    const instance = wrapper.instance();

    expect(wrapper.state().modal).toBe(false);
    instance.toggle();
    expect(wrapper.state().modal).toBe(true);
    instance.toggle();
    expect(wrapper.state().modal).toBe(false);
  });
});
