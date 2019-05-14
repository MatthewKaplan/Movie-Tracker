import React from "react";
import "../GenrePage/GenrePage.scss";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

class MoviePage extends React.Component {
  renderMovieCards = () => {
    return this.props.movies.map(movie => (
      <MovieCard
        key={movie.id}
        wholeObj={movie}
        title={movie.title}
        img={movie.backdrop_path}
      />
    ));
  };

  render() {
    return (
      <React.Fragment>
        <section className="backgroundImage" />
        <div className="genre-page">{this.renderMovieCards()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviePage);
