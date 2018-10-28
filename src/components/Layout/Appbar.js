import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuTriger from '../ResponsiveMenu/ResponsiveMenuTrigerContainer';

const AppBar = ({ changeLang, locale }) => (
  <header className="appbar">
    <NavLink className="logo" to="/" title="Sample app" >
      <span className="logo__text">Sample app</span>
    </NavLink>
    <div className="toolbox__item lang-switcher">
      {
        ['pl', 'en'].map(lang => (
          <button
            key={lang}
            className={classnames('lang-switcher__link', { active: locale === lang })}
            type="text"
            onClick={() => changeLang(lang)}
          >
            {lang}
          </button>
        ))
      }
      <span className="opener icon-carret" />
    </div>
    <MenuTriger />
  </header>
);

AppBar.propTypes = {
  changeLang: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default AppBar;
