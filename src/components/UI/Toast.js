import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { toast, ToastContainer, style } from 'react-toastify';

// styles
style({
  width: '320px',
  colorDefault: '#d9f2e5',
  colorInfo: '#0098df',
  colorSuccess: '#07bc0c',
  colorWarning: '#f1c40f',
  colorError: '#ed1c24',
  colorProgressDefault: '#0098df',
  zIndex: 0,
  TOP_RIGHT: {
    top: '20px',
    right: '30px',
  },
  fontFamily: 'Open Sans',
});


const CloseButton = ({ closeToast }) => (
  <i
    role="presentation"
    className="toast__close-btn"
    onClick={closeToast}
  >
    &#215;
  </i>
);

CloseButton.defaultProps = {
  closeToast: () => {},
};

CloseButton.propTypes = {
  closeToast: PropTypes.func,
};

export const showToast = (Msg, text) => {
  toast.dismiss();
  toast(<Msg text={text} />, {
    onOpen: () => window.scrollTo(0, 0),
  });
};

export const showToastError = (Msg, text) => {
  toast.dismiss();
  toast.error(<Msg text={text} error />, {
    onOpen: () => window.scrollTo(0, 0),
  });
};

export const Msg = ({ text, error }) => (
  <span className={classnames({ toast__msg: true, error })}>
    {error ? null : <i className="icon-ok-circled" />}
    {text}
  </span>
);

Msg.defaultProps = {
  error: false,
};

Msg.propTypes = {
  text: PropTypes.any.isRequired,
  error: PropTypes.bool,
};


const Toast = () => (
  <ToastContainer
    bodyClassName="toast__body"
    className="toast"
    hideProgressBar
    newestOnTop
    closeButton={<CloseButton />}
    autoClose={false}
  />
);

export default Toast;
