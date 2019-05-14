import React from "react";
import SplashImage from "../SplashImage/SplashImage";
import Carousel from "../Carousel/Carousel";
import MovieCard from "../MovieCard/MovieCard";
import { NavLink, Link } from "react-router-dom";
import GenrePage from "../GenrePage/GenrePage";
import News from "../News/News";
import { apiKey } from "../../api/apiKey";
import { nytApiKey } from "../../api/nytApiKey";
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
import { fetchData } from "../../apiCalls/apiCalls";

class MainPage extends React.Component {
  state = {
    movieUrl: "https://api.themoviedb.org/3",
    newsUrl: "https://api.nytimes.com/svc",
    showPopUp: false
  };
  componentDidMount() {
    this.renderNewsResults();
    this.fetchPopularMovies();
    this.fetchPopularTvShows();
    this.fetchComingSoon();
  }

  fetchPopularMovies = () => {
    fetchData(
      `${this.state.movieUrl}/discover/movie?${apiKey}&sort_by=popularity.desc`
    ).then(response => this.props.fetchPopularMovies(response.results));
  };

  renderPopularMovies = () => {
    return this.props.movies.map(movie => (
      <MovieCard
        key={movie.id}
        wholeObj={movie}
        title={movie.title}
        img={movie.backdrop_path}
      />
    ));
  };

  fetchPopularTvShows = () => {
    fetchData(
      `${this.state.movieUrl}/discover/tv?${apiKey}&sort_by=popularity.desc`
    ).then(response => this.props.fetchPopularTv(response.results));
  };

  renderPopularTvShows = () => {
    return this.props.tv.map(tvShow => (
      <MovieCard
        key={tvShow.id}
        wholeObj={tvShow}
        title={tvShow.name}
        img={tvShow.backdrop_path}
      />
    ));
  };

  fetchComingSoon = () => {
    fetchData(`${this.state.movieUrl}/movie/upcoming?${apiKey}`).then(
      response => this.props.fetchUpcoming(response.results)
    );
  };

  renderComingSoon = () => {
    return this.props.upcoming.map(film => (
      <MovieCard
        key={film.id}
        wholeObj={film}
        title={film.title}
        img={film.backdrop_path}
      />
    ));
  };

  renderSearchResults = () => {
    return this.props.searchResults.map(userSearch => (
      <MovieCard
        key={userSearch.id}
        wholeObj={userSearch}
        title={userSearch.title}
        img={userSearch.backdrop_path}
      />
    ));
  };

  renderNewsResults = () => {
    fetchData(
      `${this.state.newsUrl}/topstories/v2/movies.json?${nytApiKey}`
    ).then(response => this.props.fetchNews(response.results));
  };

  handleClick = endPath => {
    fetchData(
      `${this.state.movieUrl}/discover/movie?${apiKey}${endPath}&page=3`
    ).then(response => this.props.fetchGenres(response.results));
  };

  render() {
    return (
      <main className="main-page">
        {this.props.searchResults.length > 0 ? (
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
                    className="genre action"
                    onClick={() => this.handleClick("&with_genres=28")}
                  >
                    <div>
                      <h1 className="genreTitle">Action</h1>
                    </div>
                  </NavLink>
                  <Link
                    to="/ComedyMovies"
                    className="genre comedy"
                    onClick={() => this.handleClick("&with_genres=35")}
                  >
                    <div>
                      <h1 className="genreTitle">Comedy</h1>
                    </div>
                  </Link>
                  <Link
                    to="/Documentaries"
                    className="genre documentaries"
                    onClick={() => this.handleClick("&with_genres=99")}
                  >
                    <div>
                      <h1 className="genreTitle">Documentaries</h1>
                    </div>
                  </Link>
                  <Link
                    to="/FamilyMovies"
                    className="genre family"
                    onClick={() => this.handleClick("&with_genres=10751")}
                  >
                    <div>
                      <h1 className="genreTitle">Family</h1>
                    </div>
                  </Link>
                  <Link
                    to="/HorrorMovies"
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
    searchResults: state.search
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSearch: searchResults => dispatch(fetchSearch(searchResults)),
  fetchPopularMovies: popularMovies =>
    dispatch(fetchPopularMovies(popularMovies)),
  fetchPopularTv: popularTv => dispatch(fetchPopularTv(popularTv)),
  fetchUpcoming: upcoming => dispatch(fetchUpcoming(upcoming)),
  fetchNews: news => dispatch(fetchNews(news)),
  fetchGenres: genres => dispatch(fetchGenres(genres))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
