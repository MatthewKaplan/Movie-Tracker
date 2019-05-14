import React from "react";
import "./GenrePage.scss";
import { fetchGenres } from "../../actions";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

class GenrePage extends React.Component {
  renderMovieCards = () => {
    return this.props.genre.map(movie => (
      <MovieCard key={movie.id} wholeObj={movie} title={movie.title} img={movie.backdrop_path} />
    ));
  };

  render() {
    return (
      <React.Fragment>
      <section className="backgroundImage" />
      <div className="genre-page">{this.renderMovieCards()}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  genre: state.genre
});

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenrePage);
