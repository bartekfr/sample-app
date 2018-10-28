import React from 'react';
import { shallow } from 'enzyme';
import { BreadcrumbsHTML } from './Breadcrumbs';

describe('Breadcrumbs component', () => {
  const props = {
    breadcrumbs: [
      { breadcrumb: 'Home', path: '/', match: { url: '/' } },
      { breadcrumb: 'Test', path: '/examples', match: { url: '/examples' } },
    ],
  };

  it('Renders menu correctly', () => {
    const wrapper = shallow(<BreadcrumbsHTML {...props} />);

    expect(wrapper.hasClass('breadcrumbs')).toBe(true);
    expect(wrapper.find('.breadcrumbs__txt').length).toBe(2);
  });

  it('Last item is simple text not link', () => {
    const wrapper = shallow(<BreadcrumbsHTML {...props} />);

    expect(wrapper.find('.breadcrumbs').find('.breadcrumbs__item').last().find('breadcrumbs__link').length).toBe(0);
  });
});
