import React from "react";
import "./_MovieCard.scss";
import { connect } from "react-redux";
import { fetchPost, fetchUserData } from "../../apiCalls/apiCalls";
import { favoritesList } from "../../actions/index";
import PropTypes from "prop-types";

export class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleClass = bool => {
    // const currentState = this.state.active;
    this.setState({ active: bool });
  };

  favoriteMovie = (movie, e) => {
    e.preventDefault();
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

  deleteFavorite = (movie, e) => {
    e.preventDefault();
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

  toLoginPage = () => {
    console.log("hello?");
    this.props.routeProps.push("/login");
  };

  render() {
    let movie = this.props.wholeObj;
    let isFavorited = movie.favorited;
    isFavorited = this.checkIfFavorited(this.props.favorites, movie);
    movie = { ...movie, favorited: isFavorited };

    let whichFavoriteButton;

    if (!this.props.isLoggedIn) {
      whichFavoriteButton = (
        <button
          className={this.state.active ? "render-button" : "render-hidden"}
          onMouseEnter={this.toLoginPage}
        >
          Sign in to Favorite movie
        </button>
      );
    } else if (isFavorited) {
      whichFavoriteButton = (
        <button
          className={this.state.active ? "render-button" : "render-hidden"}
          onMouseEnter={e => this.deleteFavorite(movie, e)}
        >
          Remove Favorite
        </button>
      );
    } else {
      whichFavoriteButton = (
        <button
          className={this.state.active ? "render-button" : "render-hidden"}
          onMouseEnter={e => this.favoriteMovie(movie, e)}
        >
          Favorite
        </button>
      );
    }

    const movieBackdrop = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${
        this.props.img
      })`
    };
    return (
      <div>
        <article
          className={this.state.active ? "render-details" : "render-hidden"}
        >
          <h2>{this.props.title}</h2>
        </article>
        {whichFavoriteButton}
        <div
          tabIndex="1"
          className="movie-card"
          style={movieBackdrop}
          onFocus={() => this.toggleClass(true)}
          onBlur={() => {
            this.toggleClass(false);
          }}
        >
          <h2>
            {this.props.title}
            {/* {this.props.name} */}
          </h2>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
  favoritesList: PropTypes.func

}

export const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favoriteList,
  isLoggedIn: state.isLoggedIn
});

export const mapDispatchToProps = dispatch => ({
  favoritesList: movie => dispatch(favoritesList(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
