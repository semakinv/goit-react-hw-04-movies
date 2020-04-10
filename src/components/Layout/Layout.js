import React from 'react';
import Appbar from '../Appbar/Appbar';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;
