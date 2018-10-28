import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Route component handling authentication
const RouteComponent = ({ component: Component, isLogged, ...props }) => (
  isLogged ? (
    <Component {...props} />
  ) : (
    <Redirect to={{
        pathname: '/login',
      }}
    />
  )
);

RouteComponent.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const ProtectedRoute = ({ component: Component, isLogged, ...props }) => (
  <Route {...props} render={() => <RouteComponent component={Component} isLogged={isLogged} />} />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
