import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./_Carousel.scss";
import { fetchMovieTvData } from "../../api/index";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      movieUrl: "https://api.themoviedb.org/3/discover/movie?",
      tvUrl: "https://api.themoviedb.org/3/discover/tv?",
      upcomingMovies: "https://api.themoviedb.org/3/movie/upcoming?",
      popular: "&sort_by=popularity.desc",
      error: "",
      fetchedMovieData: [],
      fetchedTvData: [],
      fetchedUpcomingData: []
    };
  }

  componentDidMount = async () => {
    const { movieUrl, tvUrl, upcomingMovies, popular } = this.state;
    try {
      const popularMovies = await fetchMovieTvData(movieUrl, popular);
      const comingSoon = await fetchMovieTvData(upcomingMovies, "");
      const popularTvShows = await fetchMovieTvData(tvUrl, popular);
      this.setState({
        fetchedMovieData: popularMovies.results,
        fetchedTvData: popularTvShows.results,
        fetchedUpcomingData: comingSoon.results
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };

  displayCards = () => {
    return this.state.fetchedMovieData.map(movie => (
      <div key={movie.id}>
        <h4>{movie.title}</h4>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="img poster"
        />
      </div>
    ));
  };

  render() {
    return (
      <section className="carousel">
        <h3>Carousel Title</h3>
        <div className="carousel-cards">
        {
          this.state.fetchedMovieData.map(movie =>
            <MovieCard 
              key={movie.id}
              title={movie.title}
              img={movie.poster_path}
              />)
        }
        </div>
      </section>
    );
  }
}

export default Carousel;
