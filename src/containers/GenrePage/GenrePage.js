import React from "react";
import "./GenrePage.scss";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import PropTypes from "prop-types";

export class GenrePage extends React.Component {
  renderMovieCards = type => {
    return type.map(movie => (
      <MovieCard
        key={movie.id}
        wholeObj={movie}
        name={movie.name}
        title={movie.title}
        img={movie.backdrop_path}
      />
    ));
  };

  render() {
    const { movies, tv, favoriteList, searchResults, genre, isLoggedIn } = this.props;
    let whatToRender;
    const currentPath = this.props.location.pathname;

    if (currentPath === "/Movies") {
      whatToRender = this.renderMovieCards(movies);
    } else if (currentPath === "/TV_Shows") {
      whatToRender = this.renderMovieCards(tv);
    } else if (currentPath === "/Favorites") {
      whatToRender = this.renderMovieCards(favoriteList);
    } else if (currentPath === "/SearchResults") {
      whatToRender = this.renderMovieCards(searchResults);
    } else {
      whatToRender = this.renderMovieCards(genre);
    }

    return (
      <React.Fragment>
        <section className="backgroundImage" />
        {currentPath === "/Favorites" && isLoggedIn === false ? <h1>Please Log in to veiw your favorites</h1> : null}
        {currentPath === "/Favorites" && isLoggedIn && favoriteList.length === 0 ? <h1>Looks like you havent saved any favorites yet!</h1> : null}
        <div className="genre-page">{whatToRender}</div>
      </React.Fragment>
    );
  }
}

GenrePage.propTypes = {
  genre: PropTypes.array.isRequired,
  movies: PropTypes.array.isRequired,
  tv: PropTypes.array.isRequired,
  favoriteList: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.array.isRequired,
  searchResults: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  genre: state.genre,
  movies: state.movies,
  tv: state.tv,
  favoriteList: state.favoriteList,
  searchResults: state.search,
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(GenrePage);
