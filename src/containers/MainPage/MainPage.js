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
      <main className="main-page">
        <SplashImage />
        <div className="under-splash">
          <section className="major-release-container">
            <h1 className="container-title">Major Releases</h1>
            <section className="major-release-section">
              <article className="main-release" />
              <article className="main-release" />
              <article className="main-release" />
              <article className="main-release" />
            </section>
          </section>
          <section className="genre-container">
            <h1 className="container-title">Genres</h1>
            <section className="genres">
              <div className="genre">Genre</div>
              <div className="genre">Genre</div>
              <div className="genre">Genre</div>
              <div className="genre">Genre</div>
              <div className="genre">Genre</div>
              <div className="genre">Genre</div>
            </section>
          </section>
          <section className="carousel-section">
            <Carousel>{this.renderPopularMovies()}</Carousel>
            <Carousel>{this.renderPopularTvShows()}</Carousel>
            <Carousel>{this.renderComingSoon()}</Carousel>
          </section>
          <footer className="main-footer">
            <p>hello</p>
          </footer>
        </div>
      </main>
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
