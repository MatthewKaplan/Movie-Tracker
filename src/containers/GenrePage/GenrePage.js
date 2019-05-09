import React from "react";
import './GenrePage.scss';
import {
  fetchGenres
} from "../../actions";
import { connect } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

class GenrePage extends React.Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  renderMovieCards = () => {
    return this.props.genre.map(movie => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        img={movie.backdrop_path}
      />
    ));
  }




  render() {
    console.log(this.props.genre);
    return (
      <div className="genre-container">
        {this.renderMovieCards()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    genre: state.genre
  };
};

export default connect(
  mapStateToProps,
  { fetchGenres }
)(GenrePage);


