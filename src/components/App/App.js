import React from 'react';
import { Router } from 'react-router-dom';
import history from '../../config/js/history';
import CookiePopup from '../CookiePopup/CookieContainer';
import Routes from '../Routing/TopRoutes';

const App = () => (
  <div>
    <Router history={history}>
      <React.Fragment>
        <Routes />
        <CookiePopup />
      </React.Fragment>
    </Router>
  </div>
);

export default App;
