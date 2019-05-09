import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./_MainPage.scss";
import {
  fetchPopularMovies,
  fetchPopularTv,
  fetchUpcoming
} from "../../actions";
import { connect } from "react-redux";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchPopularTv();
    this.props.fetchUpcoming();
  }

  renderPopularMovies = () => {
    return this.props.movies.map(movie => (
      <MovieCard key={movie.id} title={movie.title} img={movie.backdrop_path} />
    ));
  };

  renderPopularTvShows = () => {
    return this.props.tv.map(tvShow => (
      <MovieCard
        key={tvShow.id}
        title={tvShow.name}
        img={tvShow.backdrop_path}
      />
    ));
  };

  renderComingSoon = () => {
    return this.props.upcoming.map(film => (
      <MovieCard key={film.id} title={film.title} img={film.backdrop_path} />
    ));
  };

  render() {
    console.log(this.props);
    return (
      <div className="main-page">
        <SplashImage />
        <div className="main-section">
          <section className="genres">
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
            <div className="genre">Genre</div>
          </section>
          <section className="main-release" />
          <section className="main-release" />
        </div>
        <div className="carousel-section">
          <Carousel>{this.renderPopularMovies()}</Carousel>

          <Carousel>{this.renderPopularTvShows()}</Carousel>

          <Carousel>{this.renderComingSoon()}</Carousel>
        </div>
        <footer className="main-footer">
          <p>hello</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { movies: state.movies, tv: state.tv, upcoming: state.upcoming };
};

export default connect(
  mapStateToProps,
  { fetchPopularMovies, fetchPopularTv, fetchUpcoming }
)(MainPage);
