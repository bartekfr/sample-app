import React from 'react';
import { shallow } from 'enzyme';
import Menu, { MenuTriger } from './ResponsiveMenu';
import * as Navigation from '../Menu/Menu';

jest.mock('react-window-size-listener');

Navigation.default = () => <div><span className="redirect">redirect</span></div>;


describe('Responsive menu component', () => {
  const toggleMenu = jest.fn();
  const menuVisible = true;
  const history = {
    listen: cb => cb(),
  };
  const props = {
    toggleMenu,
    menuVisible,
    history,
  };

  it('Renders menu correctly', () => {
    const wrapper = shallow(<Menu {...props} />);
    expect(wrapper.hasClass('rmenu')).toBe(true);
    expect(wrapper.hasClass('rmenu--hidden')).toBe(false);
    wrapper.setProps({
      menuVisible: false,
    });

    expect(wrapper.hasClass('rmenu')).toBe(true);
    expect(wrapper.hasClass('rmenu--hidden')).toBe(true);
  });

  it('Renders trigger button correctly', () => {
    const wrapper = shallow(<MenuTriger {...props} />);
    expect(wrapper.hasClass('rmenu__trigger--close')).toBe(true);
    wrapper.setProps({
      menuVisible: false,
    });

    expect(wrapper.hasClass('rmenu__trigger--open')).toBe(true);
  });

  it('Closes menu on route change', () => {
    jest.spyOn(history, 'listen');
    shallow(<Menu {...props} />);

    expect(toggleMenu).toHaveBeenCalledWith(false);
  });

  it('Closes menu when screen is wider than 768px', () => {
    const wrapper = shallow(<Menu {...props} />);
    const instance = wrapper.instance();
    instance.resizeHandler({
      windowWidth: 1000,
    });
    expect(toggleMenu).toHaveBeenCalledWith(false);
  });
});
