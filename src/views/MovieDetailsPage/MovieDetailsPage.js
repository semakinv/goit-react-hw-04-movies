import React, { Component } from 'react';
import Cast from '../../views/Cast/Cast';
import Reviews from '../../views/Reviews/Reviews';
import movieApi from '../../services/movieApi';
import routes from '../../services/routes';
import { Link, Route, Switch } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
export default class MovieDetailesPage extends Component {
  state = { show: undefined };

  componentDidMount() {
    if (!this.state.show) {
      movieApi
        .fetchMovieDetailsPage(this.props.match.params.movieId)
        .then(show => this.setState({ show: show.data }));
    }
  }
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    if (!this.state.show) {
      return <div>Wait</div>;
    }
    const {
      poster_path,
      original_title,
      overview,
      genres,
      vote_average,
      id,
    } = this.state.show;
    const userScore = vote_average * 10;
    return (
      <div className={styles.movieDetailsPage}>
        {this.state.show && (
          <>
            <button type="button" onClick={this.goBack}>
              <b>&larr;</b> Go back
            </button>
            <div className={styles.movieInfSection}>
              {
                <img
                  src={`http://image.tmdb.org/t/p/original${poster_path}`}
                  alt={original_title}
                />
              }
              <div>
                <h1>{original_title}</h1>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>

                <h4>Genres</h4>
                {genres.map(genre => (
                  <ul key={genre.id}>
                    <li>{genre.name} </li>
                  </ul>
                ))}
              </div>
            </div>
            <hr />
            <h3>Aditional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${id}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path={routes.cast} component={Cast} />
              <Route path={routes.reviews} component={Reviews} />
            </Switch>
          </>
        )}
      </div>
    );
  }
}
