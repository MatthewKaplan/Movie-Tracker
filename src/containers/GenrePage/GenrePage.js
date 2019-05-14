import React from "react";
import "./GenrePage.scss";
import { fetchGenres } from "../../actions";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

class GenrePage extends React.Component {
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
    let whatToRender;
    const currentPath = this.props.location.pathname;

    if (currentPath === "/Movies") {
      whatToRender = this.renderMovieCards(this.props.movies);
    } else if (currentPath === "/TV_Shows") {
      whatToRender = this.renderMovieCards(this.props.tv);
    } else if (currentPath === "/Favorites") {
      whatToRender = this.renderMovieCards(this.props.favoriteList);
    } else if (currentPath === "/SearchResults") {
      whatToRender = this.renderMovieCards(this.props.searchResults);
    } else {
      whatToRender = this.renderMovieCards(this.props.genre);
    }

    return (
      <React.Fragment>
        <section className="backgroundImage" />
        <div className="genre-page">{whatToRender}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  genre: state.genre,
  movies: state.movies,
  tv: state.tv,
  favoriteList: state.favoriteList,
  searchResults: state.search
});

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenrePage);
