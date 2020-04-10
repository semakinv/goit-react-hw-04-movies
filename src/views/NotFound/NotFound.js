import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../NotFound/NotFound.module.css';

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.status}>404</h1>
    <p>
      Упс, кажется Вы потерялись. Вот <Link to="/">ccылка</Link> на главную
      страницу.
    </p>
  </div>
);

export default NotFound;
