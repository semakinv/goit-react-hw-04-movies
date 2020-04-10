import React, { Component } from 'react';
import movieApi from '../../services/movieApi';
import imagePath from '../../assets/unknownPic.jpg';
import styles from './Cast.module.css';
class Cast extends Component {
  state = undefined;

  componentDidMount() {
    if (!this.state) {
      movieApi
        .fetchCast(this.props.match.params.movieId)
        .then(dataCast => this.setState(dataCast.data));
    }
  }

  render() {
    if (!this.state) {
      return <div>Wait</div>;
    }
    return (
      <div>
        {!this.state.length && (
          <ul>
            {this.state.cast.map(castItem => (
              <li key={castItem.id} className={styles.list}>
                {castItem.profile_path ? (
                  <img
                    className={styles.image}
                    src={`http://image.tmdb.org/t/p/original/${castItem.profile_path}`}
                    alt={castItem.name}
                  />
                ) : (
                  <img
                    className={styles.image}
                    src={imagePath}
                    alt={castItem.name}
                  />
                )}

                {castItem.name}
                <p className={styles.itemText}>
                  Character: {castItem.character}
                  <hr />
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Cast;
