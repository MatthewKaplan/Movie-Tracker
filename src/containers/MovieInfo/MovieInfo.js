import React, { Component } from "react";
import "./MovieInfo.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";
import { favoritesList } from "../../actions/index";

export class MovieInfo extends Component {
  state = { currentMovie: [] };

  favoriteMovie = movie => {
    const id = this.props.user.id;
    const cleanedMovie = this.cleanForFavorite(movie, id);
    const url = "http://localhost:3000/api/users/favorites/new";
    const userOptionObject = {
      method: "POST",
      body: JSON.stringify(cleanedMovie),
      headers: { "Content-Type": "application/json" }
    };
    this.handleFavorites(url, userOptionObject);
  };

  cleanForFavorite = (movie, id) => {
    const { title, poster_path, release_date, vote_average, overview } = movie;
    return {
      movie_id: movie.id,
      user_id: id,
      title,
      poster_path,
      release_date,
      vote_average,
      overview
    };
  };

  handleFavorites = (url, options) => {
    fetchPost(url, options).then(result => {
      if (result.status === "success") {
        const url = `http://localhost:3000/api/users/${
          this.props.user.id
        }/favorites`;
        fetchUserData(url)
          .then(result => this.props.favoritesList(result.data))
          .catch(err => this.setState({ error: err }));
      }
    });
  };

  checkIfFavorited = (favorites, movie) => {
    if (!movie.favorited) {
      return favorites.some(favorite => favorite.movie_id === movie.id);
    } else {
      return true;
    }
  };

  deleteFavorite = movie => {
    const movieId = movie.movie_id ? movie.movie_id : movie.id;
    const url = `http://localhost:3000/api/users/${
      this.props.user.id
    }/favorites/${movieId}`;
    const userOptionObject = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    this.handleFavorites(url, userOptionObject);
  };

  render() {
    const {
      overview,
      backdrop_path,
      poster_path,
      title,
      name
    } = this.props.currentMovie;

    let movie = this.props.currentMovie;
    let isFavorited = movie.favorited;
    isFavorited = this.checkIfFavorited(this.props.favorites, movie);
    movie = { ...movie, favorited: isFavorited };

    let whichFavoriteButton;

    if (!this.props.isLoggedIn) {
      whichFavoriteButton = (
        <Link to="/login">
          <button className="signin-btn fav">Sign in to Favorite movie</button>
        </Link>
      );
    } else if (isFavorited) {
      whichFavoriteButton = (
        <div
          onClick={() => this.deleteFavorite(movie)}
          className="favoriteActive fav"
        />
      );
    } else {
      whichFavoriteButton = (
        <div
          onClick={() => this.favoriteMovie(movie)}
          className="favorite fav"
        />
      );
    }

    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
    };

    const moviePoster = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
    };

    return (
      <React.Fragment>
        <section className="backgroundImage" />
        <div className="movieInfoContainer" style={movieBackdrop}>
          <div className="content-container">
            <div className="movie-content">
              <section className="movieInfoPoster" style={moviePoster} />
            </div>
            <div className="movieInfoOverview">
              <h1>{title}</h1>
              <h1>{name}</h1>
              <p>{overview}</p>
              {whichFavoriteButton}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isLoggedIn: state.isLoggedIn,
  currentMovie: state.currentMovie,
  favorites: state.favoriteList
});

export const mapDispatchToProps = dispatch => ({
  favoritesList: movie => dispatch(favoritesList(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieInfo);
