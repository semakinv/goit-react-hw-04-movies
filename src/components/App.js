import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../views/HomePage/HomePage';
import MoviesPage from '../views/MoviesPage/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage/MovieDetailsPage';
import NotFound from '../views/NotFound/NotFound';
import Layout from './Layout/Layout';
import routes from '../services/routes';
import styles from './App.module.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={routes.homePage} exact component={HomePage} />
        <Route path={routes.moviesPage} exact component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Route path={routes.gitHomePage} exact component={HomePage} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
