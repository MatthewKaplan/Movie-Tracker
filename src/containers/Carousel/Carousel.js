import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./_Carousel.scss";
import { fetchPopularMovies, fetchPopularTv, fetchUpcoming } from "../../actions";
import { connect } from "react-redux";

class Carousel extends React.Component {

  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchPopularTv();
    this.props.fetchUpcoming();
  }

  render() {
    console.log(this.props.upcoming)
    return (
      <section className="carousel">
        <h3>Popular Movies</h3>
        <div className="carousel-cards">
          {this.props.movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={movie.backdrop_path}
            />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies, tv: state.tv, upcoming: state.upcoming };
};

export default connect(
  mapStateToProps,
  { fetchPopularMovies, fetchPopularTv, fetchUpcoming }
)(Carousel);
