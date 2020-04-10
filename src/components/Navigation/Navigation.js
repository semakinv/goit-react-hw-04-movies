import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../services/routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul className={styles.navLink}>
    <li>
      <NavLink to={routes.homePage} exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={routes.moviesPage}>Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;
