import React from "react";
import "./_MovieCard.scss";
import { connect } from "react-redux";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";
import { favoritesList } from "../../actions/index";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  favoriteMovie = (movie) => {
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
    fetchPost(url, options)
      .then(result => {
      if (result.status === "success") {
        const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites`;
        fetchUserData(url)
          .then(result => this.props.favoritesList(result.data))
          .catch(err => console.log(err));
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

  deleteFavorite = (movie) => {
    const movieId = movie.movie_id ? movie.movie_id : movie.id;
    const url = `http://localhost:3000/api/users/${this.props.user.id}/favorites/${movieId}`;
    const userOptionObject = {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }
    this.handleFavorites(url, userOptionObject);
  };

  render() {
    let movie = this.props.wholeObj;
    let isFavorited = movie.favorited;
    isFavorited = this.checkIfFavorited(this.props.favorites, movie);
    movie = { ...movie, favorited: isFavorited };

    let whichFavoriteButton;

    if(!this.props.isLoggedIn) {
      whichFavoriteButton = <button>Sign in to Favorite movie</button>
    } else if (isFavorited) {
      whichFavoriteButton = (
        <button onClick={() => this.deleteFavorite(movie)}>Remove Favorite</button>
      );
    } else {
      whichFavoriteButton = (
        <button onClick={() => this.favoriteMovie(movie)}>Favorite</button>
      );
    }

    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${
        this.props.img
      })`
    };
    return (
      <div className="movie-card" style={movieBackdrop}>
        <h2>
          {this.props.title}
          {this.props.name}
        </h2>
        {whichFavoriteButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favoriteList,
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  favoritesList: movie => dispatch(favoritesList(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
