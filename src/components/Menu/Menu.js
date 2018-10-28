import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import LogOut from '../UI/LogOut';
import './styles.css';

const Menu = ({ className }) => (
  <React.Fragment>
    <ul className={`navigation ${className}`}>
      <li className="navigation__item">
        <NavLink
          className="navigation__link"
          exact
          activeClassName="navigation__link--active"
          to="/"
        >
          {I18n.t('dashboard')}
        </NavLink>
      </li>
      <li className="navigation__item">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          to="/users"
        >
          {I18n.t('users')}
        </NavLink>
      </li>
      <li className="navigation__item navigation__logout">
        <LogOut />
      </li>
    </ul>
  </React.Fragment>
);

Menu.defaultProps = {
  className: '',
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
