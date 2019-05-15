import React from "react";
import "./_SplashImage.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SplashImage extends React.Component {
  renderPopularMovies = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const backgroundMovie = this.props.movies[randomNumber];
    const movieValues = backgroundMovie ? Object.values(backgroundMovie) : null;

    if (movieValues) {
      const movieTitle = movieValues[4];
      let backgroundImage = {
        background: `linear-gradient(rgba(0, 0, 0, 0.555) 15%, rgba(0, 0, 0, 0) 55%, black),url(https://image.tmdb.org/t/p/original${
          movieValues[10]
        })`,
        backgroundSize: "cover"
      };
      let movieBio = movieValues[12];

      return (
        <React.Fragment>
          <article className="splash-details">
            <h1 className="splash-title">{movieTitle}</h1>
            <p>{movieBio}</p>
          </article>
          <section className="splash-image" style={backgroundImage} />
        </React.Fragment>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderPopularMovies()}</React.Fragment>;
  }
}

SplashImage.propTypes = {
  movies: PropTypes.array.isRequired
};

export const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(SplashImage);
