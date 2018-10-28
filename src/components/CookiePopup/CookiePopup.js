import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import './styles.css';

const CookiePopup = ({
  accepted,
  accept,
}) => {
  const content = (
    <div className="cookie-notification">
      <div className="cookie-notification__content">
        <span className="cookie-notification__icon icon-info-circled-alt" />
        <span className="cookie-notification__text">{I18n.t('cookieInfoText')}</span>
      </div>
      <button className="cookie-notification__close" onClick={accept}>
        <span className="icon-close" />
        {I18n.t('close')}
      </button>
    </div>
  );
  return accepted ? null : content;
};


CookiePopup.propTypes = {
  accepted: PropTypes.bool.isRequired,
  accept: PropTypes.func.isRequired,
};


export default CookiePopup;
