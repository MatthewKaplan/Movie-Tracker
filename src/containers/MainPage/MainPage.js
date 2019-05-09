import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";
import { NavLink, Link } from "react-router-dom";
import GenrePage from "../GenrePage/GenrePage";
import News from "../News/News";
import "./_MainPage.scss";
import {
  fetchPopularMovies,
  fetchPopularTv,
  fetchUpcoming,
  fetchNews,
  fetchGenres
} from "../../actions";
import { connect } from "react-redux";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchPopularTv();
    this.props.fetchUpcoming();
    this.props.fetchNews();
    this.props.fetchGenres();
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

  handleClick = (endPath) => {
    this.props.fetchGenres(endPath);
  }

  render() {
    console.log(this.props.genre)
    return (
      <main className="main-page">
        <SplashImage />
        <div className="under-splash">
          <section className="major-release-container">
            <h1 className="container-title">Major Releases</h1>
            <section className="major-release-section">
              <article className="main-release" />
              <article className="main-release" />
              <News />
            </section>
          </section>
          <section className="genre-container">
            <h1 className="container-title">Genres</h1>
            <section className="genres">
              <NavLink
                to="/ActionMovies"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=28")}
              >
                <div>
                  <h1>Action</h1>
                </div>
              </NavLink>
              <Link
                to="/ComedyMovies"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=35")}
              >
                <div>
                  <h1>Comedy</h1>
                </div>
              </Link>
              <Link
                to="/Documentaries"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=99")}
              >
                <div>
                  <h1>Documentaries</h1>
                </div>
              </Link>
              <Link
                to="/FamilyMovies"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=10751")}
              >
                <div>
                  <h1>Family</h1>
                </div>
              </Link>
              <Link
                to="/HorrorMovies"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=27")}
              >
                <div>
                  <h1>Horror</h1>
                </div>
              </Link>
              <Link
                to="/RomanceMovies"
                component={GenrePage}
                className="genre"
                onClick={() => this.handleClick("&with_genres=10749")}
              >
                <div>
                  <h1>Romance</h1>
                </div>
              </Link>
            </section>
            <section className="carousel-section">
              <Carousel>{this.renderPopularMovies()}</Carousel>
              <Carousel>{this.renderPopularTvShows()}</Carousel>
              <Carousel>{this.renderComingSoon()}</Carousel>
            </section>
            <footer className="main-footer">
              <p>hello</p>
            </footer>
          </section>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    tv: state.tv,
    upcoming: state.upcoming,
    news: state.news,
    genre: state.genre
  };
};

export default connect(
  mapStateToProps,
  { fetchPopularMovies, fetchPopularTv, fetchUpcoming, fetchNews, fetchGenres }
)(MainPage);
