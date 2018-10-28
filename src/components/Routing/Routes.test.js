import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Routes from './Routes';
import * as Home from '../Layout/pages/Home';

Home.default = () => <div className="home" />;
jest.mock('../UsersList/UsersListContainer', () => () => null);

describe('Routing', () => {
  it('Renders Home view', () => {
    const comp = (
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    const wrapper = mount(comp);

    expect(wrapper.find('.home').length).toBe(1);
  });

  it('Renders Users view', () => {
    const comp = (
      <MemoryRouter initialEntries={['/users']}>
        <Routes />
      </MemoryRouter>
    );
    const wrapper = mount(comp);

    expect(wrapper.find('.users-view').length).toBe(1);
  });

  it('Renders Home view for not matched URLs', () => {
    const comp = (
      <MemoryRouter>
        <Routes initialEntries={['/error']} />
      </MemoryRouter>
    );
    const wrapper = mount(comp);

    expect(wrapper.find('.home').length).toBe(1);
  });
});
