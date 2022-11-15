import React, { Fragment } from 'react';
import NavBar from '../components/navbar-component';
export const Layout = props => (
  <Fragment>
    <NavBar />
    <div style={{ marginTop: '6rem' }}>{props.children}</div>
  </Fragment>
);
