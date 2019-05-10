import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";
import { NavLink, Link } from "react-router-dom";
import GenrePage from "../GenrePage/GenrePage";
import News from "../News/News";
import Footer from "../Footer/Footer";
import "./_MainPage.scss";
import {
  fetchPopularMovies,
  fetchPopularTv,
  fetchUpcoming,
  fetchNews,
  fetchGenres,
  fetchSearch
} from "../../actions";
import { connect } from "react-redux";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
    this.props.fetchPopularTv();
    this.props.fetchUpcoming();
    this.props.fetchNews();
    this.props.fetchGenres();
    this.props.fetchSearch();
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

  renderSearchResults = () => {
    return this.props.search.map(userSearch => (
      <MovieCard
        key={userSearch.id}
        title={userSearch.title}
        img={userSearch.backdrop_path}
      />
    ));
  };

  handleClick = endPath => {
    this.props.fetchGenres(endPath);
  };

  render() {
    return (
      <main className="main-page">
        {this.props.search.length > 0 ? (
          <div className="searchCardResults">{this.renderSearchResults()}</div>
        ) : (
          <div>
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
                    className="genre action"
                    onClick={() => this.handleClick("&with_genres=28")}
                  >
                    <div>
                      <h1 className="genreTitle">Action</h1>
                    </div>
                  </NavLink>
                  <Link
                    to="/ComedyMovies"
                    component={GenrePage}
                    className="genre comedy"
                    onClick={() => this.handleClick("&with_genres=35")}
                  >
                    <div>
                      <h1 className="genreTitle">Comedy</h1>
                    </div>
                  </Link>
                  <Link
                    to="/Documentaries"
                    component={GenrePage}
                    className="genre documentaries"
                    onClick={() => this.handleClick("&with_genres=99")}
                  >
                    <div>
                      <h1 className="genreTitle">Documentaries</h1>
                    </div>
                  </Link>
                  <Link
                    to="/FamilyMovies"
                    component={GenrePage}
                    className="genre family"
                    onClick={() => this.handleClick("&with_genres=10751")}
                  >
                    <div>
                      <h1 className="genreTitle">Family</h1>
                    </div>
                  </Link>
                  <Link
                    to="/HorrorMovies"
                    component={GenrePage}
                    className="genre horror"
                    onClick={() => this.handleClick("&with_genres=27")}
                  >
                    <div>
                      <h1 className="genreTitle">Horror</h1>
                    </div>
                  </Link>
                  <Link
                    to="/RomanceMovies"
                    component={GenrePage}
                    className="genre romance"
                    onClick={() => this.handleClick("&with_genres=10749")}
                  >
                    <div>
                      <h1 className="genreTitle">Romance</h1>
                    </div>
                  </Link>
                </section>
                <section className="carousel-section">
                  <Carousel>{this.renderPopularMovies()}</Carousel>
                  <Carousel>{this.renderPopularTvShows()}</Carousel>
                  <Carousel>{this.renderComingSoon()}</Carousel>
                </section>
              </section>
            </div>
          </div>
        )}
        <Footer />
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
    genre: state.genre,
    search: state.search
  };
};

export default connect(
  mapStateToProps,
  {
    fetchPopularMovies,
    fetchPopularTv,
    fetchUpcoming,
    fetchNews,
    fetchGenres,
    fetchSearch
  }
)(MainPage);
