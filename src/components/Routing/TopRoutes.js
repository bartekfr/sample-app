import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig from '../Routing/routingConfig';
import Layout from '../Layout/Layout';
import Login from '../Login/LoginContainer';
import PrivateRoute from '../PrivateRoute/PrivateRouteContainer';

// Top level application routes
// Rest of the routing is handled on lower levels (after logging in)
const Routes = () => (
  <Switch>
    <Route exact path={routesConfig.login.path} component={Login} />
    <PrivateRoute path={routesConfig.home.path} component={Layout} />
  </Switch>
);

export default Routes;
