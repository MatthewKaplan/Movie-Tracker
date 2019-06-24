import React from "react";
import "./_SplashImage.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SplashImage extends React.Component {
  renderPopularMovies = (backgroundMovie, info) => {
    const movieValues = backgroundMovie && Object.values(backgroundMovie);

    if (movieValues) {
      if (info === "title") {
        return movieValues[4];
      }
      if (info === "background") {
        let backgroundImage = {
          background: `linear-gradient(rgba(0, 0, 0, 0.555) 15%, rgba(0, 0, 0, 0) 55%, black),url(https://image.tmdb.org/t/p/original${
            movieValues[10]
          })`,
          backgroundSize: "cover"
        };
        return backgroundImage;
      }
      if (info === "bio") {
        return movieValues[12];
      }
    }
  };

  render() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    return (
      <React.Fragment>
        <article className="splash-details">
          <h1 className="splash-title">
            {this.renderPopularMovies(this.props.movies[randomNumber], "title")}
          </h1>
          <p>{this.renderPopularMovies(this.props.movies[randomNumber], "bio")}</p>
        </article>
        <section
          className="splash-image"
          style={this.renderPopularMovies(this.props.movies[randomNumber], "background")}
        />
      </React.Fragment>
    );
  }
}

SplashImage.propTypes = {
  movies: PropTypes.array.isRequired
};

export const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps)(SplashImage);
