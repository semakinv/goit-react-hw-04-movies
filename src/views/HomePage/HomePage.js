import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import movieApi from '../../services/movieApi';
import styles from './HomePage.module.css';

export default class Shows extends Component {
  state = {};

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    movieApi.fetchHomePageUrl().then(shows => this.setState({ shows }));
  };

  render() {
    return (
      <>
        <h1>Trending today</h1>
        {this.state.shows && (
          <ul>
            {this.state.shows.data.results.map(show => (
              <li key={show.id} className={styles.trendListItem}>
                <Link to={`movies/${show.id}`}>{show.original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
