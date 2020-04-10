import React, { Component } from 'react';
import styles from '../Reviews/Reviews.module.css';
import movieApi from '../../services/movieApi';

class Reviews extends Component {
  state = null;

  componentDidMount() {
    if (!this.state) {
      movieApi
        .fetchReviews(this.props.match.params.movieId)
        .then(dataReviews => this.setState(dataReviews.data));
    }
  }

  render() {
    return (
      <div>
        {this.state &&
          (this.state.results.length !== 0 ? (
            <ul className={styles.listItem}>
              {this.state.results.map(reviewsItem => (
                <li key={reviewsItem.id}>
                  <p className={styles.author}>Author: {reviewsItem.author}</p>
                  {reviewsItem.content}
                </li>
              ))}
            </ul>
          ) : (
            <p>We don't have any reviews for this movie.</p>
          ))}
      </div>
    );
  }
}

export default Reviews;
