import React from 'react';
import { Container } from 'reactstrap';
import Menu from '../Menu/MenuContainer';
import AppBar from './AppbarContainer';
import Toast from '../UI/Toast';
import Routes from '../Routing/Routes';
import ResposiveMenu from '../ResponsiveMenu/ResponsiveMenuContainer';
import './styles.css';

export default () => (
  <Container fluid className="wrapper">
    <AppBar />
    <div className="middle">
      <ResposiveMenu />
      <aside className="aside">
        <Menu />
      </aside>
      <main className="main">
        <Toast />
        <Routes />
      </main>
    </div>
  </Container>
);
