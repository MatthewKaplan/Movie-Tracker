import React from "react";
import "./GenrePage.scss";
import { fetchGenres } from "../../actions";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

class GenrePage extends React.Component {
  renderMovieCards = () => {
    return this.props.genre.map(movie => (
      <MovieCard key={movie.id} title={movie.title} img={movie.backdrop_path} />
    ));
  };

  renderAllMovies = () => {
    return this.props.moviesArray.map(movie => (
      <MovieCard key={movie.id} title={movie.title} img={movie.backdrop_path} />
    ));
  };

  render() {
    console.log(this.props.genre);
    return <div className="genre-page">{this.renderMovieCards()}</div>;
  }
}

const mapStateToProps = state => ({
  genre: state.genre,
  moviesArray: state.popularMovies
});

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenrePage);
