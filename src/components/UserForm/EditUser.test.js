import React from 'react';
import { shallow } from 'enzyme';
import UserFormWrapper from './UserFormWrapper';

jest.mock('./UserForm');

describe('Add/edit user', () => {
  const props = {
    initialValues: {},
    getUser: jest.fn(),
    submitRequest: jest.fn(),
    match: {
      params: {
        id: 4,
      },
    },
    history: {},
    loading: false,
    edit: false,
  };

  it('Renders correctly', () => {
    const wrapper = shallow(<UserFormWrapper {...props} />);

    expect(wrapper.hasClass('user-form-wrapper')).toBe(true);
  });

  it('Edit mode - loads initial data', () => {
    const editProps = {
      ...props,
      edit: true,
    };
    shallow(<UserFormWrapper {...editProps} />);

    expect(props.getUser).toHaveBeenCalledWith(4);
  });
});
