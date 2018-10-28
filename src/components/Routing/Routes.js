import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesConfig from './routingConfig';
import Home from '../Layout/pages/Home';
import Users from '../Layout/pages/Users';
import EditUser from '../Layout/pages/EditUser';
import AddUser from '../Layout/pages/AddUser';

// Routes accessible after logging in
const Routes = () => (
  <Switch>
    <Route exact path={routesConfig.home.path} component={Home} />
    <Route exact path={routesConfig.users.path} component={Users} />
    <Route
      exact
      path={routesConfig.editUserAbstract.path}
      render={() => <Redirect to={routesConfig.users.path} />}
    />
    <Route exact path={routesConfig.editUser.path} component={EditUser} />
    <Route exact path={routesConfig.addUser.path} component={AddUser} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
