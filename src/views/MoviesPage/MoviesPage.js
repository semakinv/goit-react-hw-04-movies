import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbox from '../../components/Searchbox/Searchbox';
import movieApi from '../../services/movieApi';
import styles from './MoviesPage.module.css';
export default class Shows extends Component {
  state = {};

  componentDidMount() {
    const query = this.props.location.search;

    if (query) {
      this.fetchShows(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.location.search;
    const nextQuery = this.props.location.search;
    if (prevQuery !== nextQuery && nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = search_query => {
    movieApi
      .fetchMovies(search_query)
      .then(shows => this.setState({ shows: shows.data.results }));
  };

  handleChangeQuery = query => {
    if (query) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`,
      });
    }
  };

  render() {
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {this.state.shows && (
          <ul>
            {this.state.shows.map(show => (
              <li key={show.id} className={styles.list}>
                <Link
                  to={{
                    pathname: `${match.url}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
